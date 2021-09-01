import React from 'react';
import { ApplicationContext } from './ApplicationContext';


const ApplicationContextProvider = ({children, defaultValues = {taches: []}}) => {

  const [state, setState] = React.useState(defaultValues);
  const saveTaches = ({taches}) => {
    const updatedState = {...state, taches: [...state.taches, ...taches]};
    setState(updatedState);
  };
  const updateTache = ({payload}) => {console.log(payload)};
  return (
    <ApplicationContext.Provider value={{state, saveTaches, updateTache}}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;


