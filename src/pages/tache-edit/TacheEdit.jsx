import React from 'react';
import { useParams } from 'react-router';


const TacheEdit = props => {

  const { id } = useParams();


  console.log(id);
  return (
    <section className="mt-10">
      Tache à modier
    </section>
  );
};

TacheEdit.propTypes = {
  
};

export default TacheEdit;