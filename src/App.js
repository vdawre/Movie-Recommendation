import React from "react";
import "./styles.css";
import { useState } from "react";

const MovieDB = {
  scifi: [
    { name: "Inception", rating: "4/5", desc: "A sci-fi thriller" },
    {
      name: "Interstellar",
      rating: "4.8/5",
      desc: "A Journey across the space"
    },
    { name: "Star-trek", rating: "4.2/5", desc: "A space adventure" },
    {
      name: "Gravity",
      rating: "4.9/5",
      desc: "The survival story of an astronaut"
    }
  ],

  survival: [
    {
      name: "Mad Max",
      rating: "4.3/5",
      desc: "A post-apocalyptic action film"
    },
    {
      name: "Predator",
      rating: "4.1/5",
      desc: "American science fiction action anthology"
    },
    {
      name: "The Revenant",
      rating: "4/5",
      desc: "A frontiersman on a fur trading expedition"
    },
    {
      name: "The Martian",
      rating: "3.6/5",
      desc: "An astronaut becomes stranded on Mars"
    }
  ],
  comedy: [
    {
      name: "The pineapple express",
      rating: "3.9/5",
      desc: "American comedy film"
    },
    {
      name: "Hera Pheri",
      rating: "3.8/5",
      desc: "Indian Hindi-language comedy film"
    },
    {
      name: "Free Guy",
      rating: "3.7/5",
      desc: "American action-comedy film"
    },
    {
      name: "Scott Pilgrim",
      rating: "4.2/5",
      desc: "Romantic action comedy"
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
