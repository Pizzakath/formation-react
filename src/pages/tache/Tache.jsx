import { shape } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Tache = ({tache : {id, statut, titre, description, ti, tr}, handleClick}) => {


  return (
      <div className="tache card mb-3 text-dark" onClick={() => handleClick({id, statut})}>
      <div className="card-body">
        <h3 className="card-title"> <Link to={`modifier/${id}`}>{titre}</Link></h3>
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