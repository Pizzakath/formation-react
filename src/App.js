import React from "react";
import { useTaches } from "./hooks/useTaches/useTaches";
import Taches from "./pages/taches/Taches";

function App() {

  const {taches, handleClick} = useTaches();

  return (
    <section>
      <h1>Liste de taches</h1>
      <Taches taches={taches} handleClick={handleClick}/>
    </section>
  );
}

export default App;


