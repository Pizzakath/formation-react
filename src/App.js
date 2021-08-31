import React from "react";

  import { 
        
    BrowserRouter as Router,
    
    Redirect, 
    
    Route,
    
    Switch 
     
  } from "react-router-dom";
  
import Header from "./components/header/Header";
import TacheEdit from "./pages/tache-edit/TacheEdit";
import Taches from "./pages/taches/Taches";

function App() {

  const links = [
    {
      name: 'Accueil',
      to: '/'
    },
    {
      name: 'Taches',
      to: '/taches'
    },
    {
      name: 'Nouvelle tache',
      to: '/creer-une-tache'
    }
  ]
  return (
    <section>
      <Router>
        <Header links={links}/>
        <Switch>
          <Route path="/taches" component={Taches}>
              <Taches/>
          </Route>
          <Route path="/creer-une-tache">
              <TacheEdit />
          </Route>
          <Route path="/modifier/:id">
              <TacheEdit />
          </Route>
          <Route path="/" exact>
            <Redirect push to="/taches" />
          </Route>
        </Switch>
      </Router>
    </section>
  );
}

export default App;


