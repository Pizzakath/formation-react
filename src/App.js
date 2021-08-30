import React, { useState } from "react";
import Taches from "./pages/taches/Taches";

function App() {

  // Appel serveur fetch, axios
  const fakeTaches = [
    {
      "id": "612cca97c7ef959d6cc61003",
      "titre": "ad consectetur culpa cillum sit",
      "description": "Id mollit culpa et in deserunt qui officia minim duis labore labore. Consequat aliqua duis consequat do officia nisi qui ut irure dolor. Reprehenderit quis cupidatat fugiat consequat est aliqua deserunt sunt sint officia laboris eu duis.\r\n",
      "ti": 35,
      "tr": 39,
      "statut": 2,
      "users": [
        {
          "id": 0,
          "name": "Kerri Hogan"
        },
        {
          "id": 1,
          "name": "Mcmahon England"
        },
        {
          "id": 2,
          "name": "Shepard Delaney"
        }
      ]
    },
    {
      "id": "612cca979b3af5f49618448e",
      "titre": "amet est sunt in magna",
      "description": "Sunt ad excepteur nostrud anim. Sunt Lorem labore elit anim. Mollit nostrud amet commodo culpa exercitation. Aliqua sint ut ad excepteur labore. Labore enim veniam duis enim irure sint dolore aliquip amet excepteur. Mollit nulla elit voluptate quis in aute nisi consectetur commodo non duis ea.\r\n",
      "ti": 26,
      "tr": 25,
      "statut": 4,
      "users": [
        {
          "id": 0,
          "name": "Clemons Whitehead"
        },
        {
          "id": 1,
          "name": "Dionne Tran"
        },
        {
          "id": 2,
          "name": "Griffin Flynn"
        }
      ]
    },
    {
      "id": "612cca97c64011e7f53fc34e",
      "titre": "officia est nulla non magna",
      "description": "Est enim incididunt magna deserunt. Officia deserunt sint commodo commodo deserunt minim mollit tempor veniam consequat. Reprehenderit aute pariatur aliqua dolor ex velit consequat excepteur.\r\n",
      "ti": 32,
      "tr": 26,
      "statut": 2,
      "users": [
        {
          "id": 0,
          "name": "Tillman Miles"
        },
        {
          "id": 1,
          "name": "Antoinette Decker"
        },
        {
          "id": 2,
          "name": "Phoebe Sampson"
        }
      ]
    },
    {
      "id": "612cca97dcf5e797b9193b98",
      "titre": "dolor labore cillum ea consequat",
      "description": "Lorem duis cupidatat ea non sit laboris. Enim esse qui exercitation aliqua eiusmod et consequat mollit in quis labore laboris proident. Ea veniam quis et ipsum do et. Aliqua officia ea pariatur nulla nisi labore enim eiusmod. Dolor exercitation ipsum est sint nisi exercitation ad cupidatat officia ut culpa aute veniam eu. Eu voluptate esse ex mollit nisi.\r\n",
      "ti": 25,
      "tr": 38,
      "statut": 1,
      "users": [
        {
          "id": 0,
          "name": "Frank Sanford"
        },
        {
          "id": 1,
          "name": "Delgado Leonard"
        },
        {
          "id": 2,
          "name": "Sherman Williamson"
        }
      ]
    },
    {
      "id": "612cca97ce5c4dd0d3e8ebe7",
      "titre": "dolor incididunt est sint ipsum",
      "description": "Incididunt est elit quis amet dolore ex sit labore aliqua magna. Irure qui voluptate tempor incididunt veniam laboris adipisicing sunt commodo ut exercitation nisi. Commodo magna est duis exercitation consequat. Occaecat sunt laboris minim nostrud adipisicing aliqua in nostrud. Ea aute adipisicing deserunt cupidatat id laborum velit deserunt aute et non ut eiusmod officia. Anim ipsum ea deserunt elit labore duis nostrud excepteur excepteur. Fugiat ullamco adipisicing officia enim enim mollit dolore proident id enim voluptate.\r\n",
      "ti": 36,
      "tr": 29,
      "statut": 1,
      "users": [
        {
          "id": 0,
          "name": "Elnora Wolfe"
        },
        {
          "id": 1,
          "name": "George Saunders"
        },
        {
          "id": 2,
          "name": "Aguirre James"
        }
      ]
    },
    {
      "id": "612cca978fa2fc54b751eb44",
      "titre": "culpa sint est nulla fugiat",
      "description": "Nostrud sint do velit elit deserunt do laborum laborum excepteur reprehenderit. Non culpa non minim magna voluptate cupidatat Lorem Lorem id labore. Dolor mollit culpa voluptate tempor minim sunt. Reprehenderit in in minim amet nostrud. Consectetur duis eu nisi consectetur.\r\n",
      "ti": 20,
      "tr": 39,
      "statut": 2,
      "users": [
        {
          "id": 0,
          "name": "Boyer Williams"
        },
        {
          "id": 1,
          "name": "Bobbie Fischer"
        },
        {
          "id": 2,
          "name": "Montoya Mendoza"
        }
      ]
    }
  ]
  const [taches, setTaches] = useState(fakeTaches);
  const handleClick = (params) => {
    const mappedTaches = taches.map(tache => 
      tache.id === params.id ? 
          {...tache, statut: ( tache.statut === 4 ? 1 : tache.statut + 1)}

        : tache
      );
    setTaches(mappedTaches);
  }
  return (
    <section>
      <h1>Liste de taches</h1>
      <Taches taches={taches} handleClick={handleClick}/>
    </section>
  );
}

export default App;


