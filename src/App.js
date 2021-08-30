import React, { useState } from "react";

function App({ value }) {
  const [civilite, setCivilite] = useState(value);

  const updateCivilite = (event) => {
    const { target: { value: civiliteSaisie } } = event
    console.log('====================================');
    console.log(civiliteSaisie);
    setCivilite(civiliteSaisie)
    console.log('====================================');
  }
  return (
    <div>
      <div>
        <h1>Veuillez indiquer votre civilité</h1>
        {
          civilite ?
            (
              <>
                <h3 className="text-center"> {`Votre civilité est ${civilite === 'mr' ? 'Monsieur' : 'Madame'}`}</h3>

              </>
            )
            : null
        }

        <div>
          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input onClick={updateCivilite} type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" value="mr" />
            <label className="btn btn-success" htmlFor="btnradio1">Monsieur</label>

            <input onClick={updateCivilite} type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" value="mme" />
            <label className="btn btn-success" htmlFor="btnradio2">Madame</label>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;


