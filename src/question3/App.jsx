// 3. Custom Hook useInput (3p)
// Skapa en hook useInput som tar hand om state för ett input-fält.
// useInput ska returnera funktionen för att uppdatera state och
// själva värdet från state.
// Använd sedan useInput i App-komponenten nedan för att spara det man
// skriver in i ett input-fält. Det man skriver in ska visas under inputfältet.

import React from "react";
import useInput from "./useInput";

function App() {
  const inputState = useInput("");

  return (
    <div>
      <input type="text" {...inputState} />
      <p>Input Value: {inputState.value}</p>
    </div>
  );
}

export default App;
