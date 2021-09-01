import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { enregistrerLesTaches } from "../../redux/actions";
export function useFetch({path, options = {}}) {
  
  const {method = 'GET'} = options;
  
  const {REACT_APP_API: dns} = process.env;
  const [errors, setErrors] = useState();
  
  const dispatch = useDispatch();
  
  const executeFetch = async (fetchOptions) =>{
      const reponse = await fetch(
          `${dns}/${path}`, 
           {
            ...fetchOptions,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
           }
          );
      if (reponse.status !== 200) {
        setErrors({message: '404'})
      } else {
        const resultat = await reponse.json();
        dispatch(enregistrerLesTaches({taches: resultat})); 
      } 
  }

  const editData = ({data}) => {
    executeFetch({...options, body:  JSON.stringify(data)})
  }

  useEffect(()=> {
    if(method === 'GET') {
      executeFetch(options);
    }
  }, [path]);

  return {data : [], errors, editData};
}
