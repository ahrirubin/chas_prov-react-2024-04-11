// 1. En lista med filmer (3p)
// Sidan ska visa en lista med filmer
// Användaren ska kunna lägga till nya filmer i listan genom att skriva in filmens namn
// i ett inputfält och sedan klicka på en "Lägg till"-knapp.
// Varje film i listan ska ha en ta bort knapp som tar bort den filmen ur listan

import { useState } from "react";

let count = 1;

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");

  function handleMovie(e) {
    setInput(e.target.value);
  }

  function handleAddMovie() {
    const movie = {
      id: count++,
      text: input,
    };

    setMovies([...movies, movie]);
  }

  function handleRemove(id) {
    const filteredMovies = movies.filter((movie) => movie.id != id);

    setMovies(filteredMovies);
  }

  return (
    <main>
      <h1>Favorite movies:</h1>
      <p>The Martian</p>
      <p>Shutter Island</p>
      <p>Spider-Man: Into the Spiderverse</p>
      {movies.map((movie) => {
        return (
          <div>
            <p>{movie.text}</p>
            <button onClick={() => handleRemove(movie.id)}>Ta bort</button>
          </div>
        );
      })}
      <input type="text" onChange={handleMovie}></input>
      <button onClick={handleAddMovie}>Lägg till</button>
    </main>
  );
}
