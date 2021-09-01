import { useContext, useEffect, useState } from 'react';
import { ApplicationContext } from '../../context/ApplicationContext';

export function useFetch({path, options}) {
  
  const {state, saveTaches} = useContext(ApplicationContext);


  const {REACT_APP_API: dns} = process.env;
  const [errors, setErrors] = useState();

  useEffect(()=> {
    const executeFetch = async () =>{
        const reponse = await fetch(`${dns}/${path}`, options);
        if (reponse.status !== 200) {
          setErrors({message: '404'})
        } else {
          const resultat = await reponse.json();
          
          
          saveTaches({taches: resultat});
    
    
    
    
        } 
    }
    executeFetch();
  }, [path]);
  
  return {data, errors};
}
