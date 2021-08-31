import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useFetch } from '../../hooks';
const TacheEdit = () => {
  const history = useHistory()
  const {editData} = useFetch({path: 'taches', options: {method: 'POST'}});
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    editData({data});
    history.push('/')
  };
  const tache = {}
  return (
      <section className="page d-flex mt-4 align-items-top">
        <div className="container">
          <div className="row">
            <div className="mx-auto col-md-6">
              <h4 className="page-title mb-2">
                Nouvelel tache
              </h4>
              <div>
                <form
                  action=""
                  className="text-white"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="form-group form-group-lg">
                    <label htmlFor="title">Titre</label>
  
                    <input
                      name="titre"
                      type="text"
                      className="form-control form-control-lg"
                      id="titre"
                      placeholder="Titre de l'annonce"
                      defaultValue={tache && tache.titre}
                      {...register('titre', {
                        required: "Ce champ est requis",
                        minLength: { value: 6, message: "trop Court" }
                      })}
                    />
  
                    {errors.titre && (
                      <p className="text-danger">{errors.titre.message}</p>
                    )}
                  </div>
                  <div className="form-group form-group-lg">
                    <label htmlFor="description">Description</label>
  
                    <textarea
                      name="description"
                      className="form-control form-control-lg"
                      id="description"
                      rows="3"
                      defaultValue={tache && tache.description}
                      {...register('description', { required: true })}
                    ></textarea>
  
                    {errors.description &&
                      errors.description.type === "required" && (
                        <p className="text-danger">Champ requis</p>
                      )}
                    {errors.description &&
                      errors.description.type === "maxLength" && (
                        <p className="text-danger">Max length exceeded</p>
                      )}
                  </div>
                  <div className="form-group form-group-lg">
                    <label htmlFor="statut">Statut</label>
                    <select
                      name="statut"
                      id="statut"
                      className="form-control form-control-lg"
                      {...register('statut', {   required: true })}
                    >
                      <option>Sélectionner un statut {tache.status}</option>
                      <option value="1">TO DO</option>
                      <option value="2">WIP</option>
                      <option value="3">TEST</option>
                      <option value="4">DONE</option>
                    </select>
                    {errors.statut &&
                      errors.statut.type === "required" && (
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
                      {...register('tr', { required: true })}
                    />
                    {errors.tr &&
                      errors.tr.type === "required" && (
                        <p className="text-danger">Champ requis</p>
                      )}
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

export default TacheEdit;