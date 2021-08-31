import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import TacheEdit from "./pages/TacheEdit/TacheEdit";
import Taches from "./pages/taches/Taches";
function App() {
  const links = [
    {
      to: '/',
      name: 'Accueil'
    },
    {
      to: '/taches',
      name: 'Taches'
    },
    {
      to: '/nouvelle-tache',
      name: 'Créer une tache'
    }
  ]
  return (
    <section>
      <Router>
        <Header links={links}/>
        <Switch>
          <Route exact path='/taches' component={Taches} /> 
          <Route exact path='/taches/:id' component={TacheEdit} /> 
          <Route path='/nouvelle-tache' component={TacheEdit} /> 
          <Route exact path='/'>
              <Redirect to='/taches' />
          </Route>
        </Switch>
      </Router>
    </section>
  );
}

export default App;


