import { shape } from 'prop-types';
import React from 'react';

const Tache = ({tache : {id, statut, titre, description, ti, tr}, handleClick}) => {


  const {REACT_APP_API: dns} = process.env;

  console.log(dns);

  return (
      <div className="tache card mb-3 text-dark" onClick={() => handleClick({id, statut})}>
      <div className="card-body">
        <h3 className="card-title">{titre}</h3>
        <div className="card-texte">{description}</div>
        <p className='row'>
          <span className='col-6'>{ti}</span>
          <span className='col-6 text-right'>{tr}</span>
        </p>
       </div>
      </div> 
  );
}
 
Tache.prototype = {
  tache: shape({})
}
export default Tache;