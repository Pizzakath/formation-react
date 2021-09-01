import { ENREGISTRER_TACHES } from "../utils/constantes";

export const enregistrerLesTaches = ({taches}) => {
  return {
    type: ENREGISTRER_TACHES,
    payload: taches
  };
}