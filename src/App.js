import React, { useEffect, useState } from "react";
import Taches from "./pages/taches/Taches";

function App() {

  const [taches, setTaches] = useState([]);
  const [fetchData, setFetchData] = useState(null);
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
  return (
    <section>
      <h1>Liste de taches</h1>
      <Taches taches={taches} handleClick={handleClick}/>
    </section>
  );
}

export default App;


