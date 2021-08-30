import React from 'react';
import Tache from '../tache/Tache';

const Taches = ({taches}) => {
  return ( 
    <div className="container">
      <div className="row">
        {
          [1, 2 ,3, 4].map((item) => (
            <div className="col-sm-3" key={item}>
              
              {
                taches 
                .filter(tache => item === tache.statut)
                .map(tache => <Tache tache={tache} key={tache.id} item={item}/>)
              }
            </div>
            
          ))
          
        }
      </div>
    </div>
   );
}
 
export default Taches;