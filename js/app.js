/** @format */

import { getPokemon } from "./api.js";
import { renderPokemon } from "./render.js";

const pokemon = await getPokemon("pikachu");
renderPokemon(pokemon, document.querySelector("#pokemon-list"));
