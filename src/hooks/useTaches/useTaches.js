

    import {useState, useEffect} from 'react';
    export const useTaches = () => {
      const [taches, setTaches] = useState([]);
      const getData = async() => {
        const reponse = await fetch('http://localhost:4000/taches');
        const data = await reponse.json();
        setTaches(data);
      }
      const handleClick = (params) => {
        const mappedTaches = taches.map(tache => 
          tache.id === params.id ? 
              {...tache, statut: ( tache.statut === 4 ? 1 : tache.statut + 1)}

            : tache
          );
        setTaches(mappedTaches);
      }

      useEffect(()=> {
        getData();
      }, [])
      return {taches, handleClick}
    }

    