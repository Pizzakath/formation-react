import React from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';


const TacheEdit = props => {

  const { id } = useParams();

  const { 
    register, 

    handleSubmit, 
    
    formState: { errors }
  
  } = useForm();


  const tache = {}
  const onSubmit = data => console.log(data);

  console.log(errors);
  return (
    <section className="page d-flex mt-4 align-items-top">

      <div className="container">
        <div className="row">
          <div className="mx-auto col-md-6">
            <h4 className="page-title mb-2">
              Mis à jour de la tâche
              <span className="ml-2 font-weight-900">{tache && tache.title}</span>
            </h4>
            <div>

              <form
                className="text-white"
                onSubmit={handleSubmit(onSubmit)}
              >


                <div className="form-group form-group-lg">
                  <label htmlFor="title">Titre</label>

                  <input
                    name="title"
                    type="text"
                    className="form-control form-control-lg"
                    id="title"
                    placeholder="Titre de l'annonce"
                    defaultValue={tache && tache.title}
                    {
                      ...register("title", { required: true })
                    }
                  />

                  {
                    errors.title?.type === "required" && (
                      <p className="text-danger">Champ requis</p>
                    )
                  }
                  
                </div>


                <div className="form-group form-group-lg">
                  <label htmlFor="description">Description</label>

                  <textarea
                    name="description"
                    className="form-control form-control-lg"
                    id="description"
                    rows="3"
                    defaultValue={tache && tache.description}
                    {...register("description", { required: true })}
                  ></textarea>

                  {errors.description?.type === "required" && (
                      <p className="text-danger">Champ requis</p>
                    )}
                </div>
                <div className="form-group form-group-lg">
                  <label htmlFor="description">Statut</label>
                  <select
                    name="status"
                    id="status"
                    className="form-control form-control-lg"
                    {...register("status", { required: true })}
                  >
                    <option>Sélectionner un statut {tache.status}</option>
                    <option value="1">TO DO</option>
                    <option value="2">WIP</option>
                    <option value="3">TEST</option>
                    <option value="4">DONE</option>
                  </select>
                  {errors.statut?.type === "required" && (
                      <p className="text-danger">Champ requis</p>
                    )}
                </div>
                <div className="form-group form-group-lg">
                  <label htmlFor="tr">Temps Restant</label>
                  <input
                    name="tr"
                    type="number"
                    className="form-control form-control-lg"
                    id="tr"
                    placeholder="Temps restant"
                    defaultValue={tache && tache.tr}
                    {...register("tr", { required: true })}
                  />
                </div>
                <div className="form-group form-group-lg">
                  <button
                    type="submit"
                    className="btn btn-outline-warning btn-lg btn-block"
                  >
                    Enregistrer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TacheEdit.propTypes = {
  
};

export default TacheEdit;
