import { ENREGISTRER_TACHES } from "../utils/constantes";

const initialState = { taches: []}
const tachesReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case ENREGISTRER_TACHES:
      return { ...state, taches: [...state.taches, ...payload]}
  
    default:
      return state;
  }
}
 
export default tachesReducer;