import React from 'react';
import { useSelector } from 'react-redux';
import Tache from '../../components/Tache/Tache';
import { useFetch } from '../../hooks';
import { tachesEnregistrees } from '../../redux/selectors';

const Taches = () => {

  const statusLabels = ['TO DO', 'WIP', 'TEST', 'DONE'];
  const { errors} = useFetch({path: 'taches'});
  const data = useSelector(tachesEnregistrees);
  return ( 
    <div className="container">
      <h1>Liste de taches</h1>
      <div className="row">
        {
          errors ? <p>{errors.message}</p>   :(
          [1, 2 ,3, 4].map((item) => (
            <div className="col-sm-3" key={item}>
              <h2>{statusLabels[item - 1]}</h2>
              {
                React.Children.toArray(
                    data
                    .filter(tache => item == tache.statut)
                    .map((tache) => <Tache tache={tache} item={item} handleClick={()=>{}}/>)
                )
              }
            </div>
            
          )))
          
        }
      </div>
    </div>
   );
}
 
export default Taches;
