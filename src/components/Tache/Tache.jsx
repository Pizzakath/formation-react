import { shape } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTempconsome } from '../../hooks';

const Tache = ({tache : {id, statut, titre, description, ti, tr}, handleClick}) => {
  const {getTempconsome} = useTempconsome({ti: 20, tr});

  const {REACT_APP_API: dns} = process.env;

  console.log(dns);

  return (
      <div className="tache card mb-3 text-dark" onClick={() => handleClick({id, statut})}>
      <div className="card-body">
        <h3 className="card-title"> <Link to={`modifier/${id}`} data-testid="titre">{titre}</Link></h3>
        <div className="card-texte">{description}</div>
        <p className='row'>
          <span className='col-6' data-testid='ti'>{ti}</span>
          <span className='col-6' data-testid='ti'>{getTempconsome()}</span>
          <span className='col-6 text-right'>{tr}</span>
        </p>
       </div>
      </div> 
  );
}
 
Tache.propsType = {
  tache: shape({})
}
export default Tache;