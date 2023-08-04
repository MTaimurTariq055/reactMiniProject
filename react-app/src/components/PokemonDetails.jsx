import * as React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

export default function PokemonDetails() {
  const location = useLocation();
  const { pokemonData } = location.state;

  return (
    <div className="app">
      <div className="details" key={pokemonData.key}>
        <div className="big-img">
          <img src={pokemonData.backSprite} alt="" />
        </div>

        <div className="box">
          <div className="row">
            <h2>{pokemonData.species}</h2>
            <span>
              <b>Color: </b>
              {pokemonData.color}
            </span>
          </div>

          <p>
            <b>Description: </b>
            {pokemonData.abilities.first.desc}
          </p>
          <p>
            <b>Ability: </b>
            {pokemonData.abilities.first.key}
          </p>
          <p>
            <b>Type: </b>
            {pokemonData.types[0].name}
          </p>
          <p>
            <b>Height: </b>
            {pokemonData.height}
          </p>
          <p>
            <b>Base Specie: </b>
            {pokemonData.baseSpecies ?? "Not Available"}
          </p>

          <Link to={`/`}>
            <Button size="small" className="cart">
              Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
