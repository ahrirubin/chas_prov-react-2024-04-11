// 3. Uppdatera ett namn med callback 3p
// En namn ska visas på sidan och namnet ska vara kopplat till useState i App-komponenten.
// Skapa en komponent: ChangeName som har ett inputfält som ska användas för att ändra
// namnet i App-komponenten via en callback-funktion.
import ChangeName from "./ChangeName";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Bengt");
  const [edit, setEdit] = useState(false);

  return (
    <div>
      <ChangeName name={name} setName={setName} edit={edit} setEdit={setEdit} />
    </div>
  );
}

export default App;
