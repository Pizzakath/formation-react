import React from 'react';
import Tache from '../tache/Tache';

const Taches = ({taches, handleClick}) => {
  const statusLabels = ['TO DO', 'WIP', 'TEST', 'DONE'];
  return ( 
    <div className="container">
      <div className="row">
        {
          [1, 2 ,3, 4].map((item) => (
            <div className="col-sm-3" key={item}>
              <h2>{statusLabels[item - 1]}</h2>
              {
                React.Children.toArray(
                    taches 
                    .filter(tache => item === tache.statut)
                    .map((tache) => <Tache tache={tache} item={item} handleClick={handleClick}/>)
                )
              }
            </div>
            
          ))
          
        }
      </div>
    </div>
   );
}
 
export default Taches;