// Återanvändbara komponenter 3p
// 1. Skapa en komponent Button som tar en color och en title som props
// Använd den 2 gånger med olika title och color.

// 2. Skapa en komponent ButtonWithChildren som änvänder children istället
// för en title prop. Använd den 2 gånger med olika title och color.

// 3. Skapa en komponent Article som tar en title och en text som props
// Använd komponenten 2 gånger med olika title och text.

import React from "react";
import Button from "./Button";
import ButtonWithChildren from "./ButtonWithChildren";
import Article from "./Article";

function App() {
  return (
    <div>
      <Button color="blue" title="Blue" />
      <Button color="green" title="Green" />
      <br />
      <ButtonWithChildren color="red">Red</ButtonWithChildren>
      <ButtonWithChildren color="yellow">Yellow</ButtonWithChildren>

      <Article title="Article 1" text="Article text 1" />
      <Article title="Article 2" text="Article text 2" />
    </div>
  );
}

export default App;
