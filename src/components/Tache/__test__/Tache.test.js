import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Tache from '../Tache';
const tache = {
  "titre": "eeeeeeeeeeeeeeeeeeee",
  "description": "Saepe esse anim eve",
  "statut": "3",
  "tr": "33",
  "id": "54eauzH"
}

test('should render tache', async () => {

  const {getByTestId} = render(<BrowserRouter><Tache tache={tache}/></BrowserRouter>);
  const result = getByTestId('titre');
  expect(result).toHaveTextContent(tache.titre);
});


test('should check TI', async () => {
  render(<BrowserRouter><Tache tache={tache}/></BrowserRouter>);

  const titre = await screen.findByText(tache.titre);
  expect(titre).toHaveTextContent(tache.titre);

  const tr = await screen.findByText(tache.tr);
  expect(tr).toHaveTextContent(tache.tr);


})
