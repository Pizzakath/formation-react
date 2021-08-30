import { shape } from 'prop-types';
import React from 'react';

const Tache = ({tache : {titre, description, ti, tr}, item}) => {
  return (
      <div className="tache card mb-3 text-dark">
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