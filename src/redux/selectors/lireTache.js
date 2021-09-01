
export const lireTache = ({state, id}) => {
  const {toutesLesTaches: {taches}} = state;
  const tache = taches.find(tache =>  tache.id === id);
  return id ? tache : {};
}
 