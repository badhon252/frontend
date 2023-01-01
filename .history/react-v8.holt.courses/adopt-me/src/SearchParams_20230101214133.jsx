// change import at top
import { useEffect, useState } from "react";
import Pet from "./Pet";

// add to the other useStates inside component at top
const [pets, setPets] = useState([]);

// add inside component, beneath all the `useState` setup
useEffect(() => {
  requestPets();
}, []);

async function requestPets() {
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  const json = await res.json();

  setPets(json.pets);
}

// in jsx, under form, inside the larger div
{
  pets.map((pet) => (
    <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
  ));
}
