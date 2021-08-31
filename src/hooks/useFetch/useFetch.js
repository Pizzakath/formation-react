import { useEffect, useState } from 'react';

export function useFetch({path, options}) {
 
  const {REACT_APP_API: dns} = process.env;
  const [data, setData] = useState();
  const [errors, setErrors] = useState();

  useEffect(()=> {
    const executeFetch = async () =>{
        const reponse = await fetch(`${dns}/${path}`, options);
        if (reponse.status !== 200) {
          setErrors({message: '404'})
        } else {
          const resultat = await reponse.json();
          setData(resultat); 
        } 
    }
    executeFetch();
  }, [path]);

  return {data, errors};
}
