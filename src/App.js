import React from "react";
import "./styles.css";
import { useState } from "react";

const MovieDB = {
  scifi: [
    { name: "Inception", rating: "4/5" },
    { name: "Interstellar", rating: "4.8/5" }
  ],

  survival: [
    {
      name: "Mad Max",
      rating: "5/5"
    },
    {
      name: "Predator",
      rating: "4/5"
    }
  ],
  comedy: [
    {
      name: "The pineapple express",
      rating: "5/5"
    },
    {
      name: "Hera Pheri",
      rating: "3/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("scifi");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Movie Recommendation</h1>
      <p style={{ fontSize: "large" }}>
        {" "}
        Checkout my favorite movies. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(MovieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#B6FFFF",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem .3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {MovieDB[selectedGenre].map((MovieDB) => (
            <li
              key={MovieDB.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                background: "#B6FFFF",
                width: "70%",
                margin: "1rem 0rem",
                color: "black"
              }}
            >
              {" "}
              <div class="output" style={{ fontSize: "larger" }}>
                {" "}
                {MovieDB.name}{" "}
              </div>
              <div class="output" style={{ fontSize: "smaller" }}>
                {" "}
                {MovieDB.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
