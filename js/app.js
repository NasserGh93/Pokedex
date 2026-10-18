/** @format */

import { getPokemon } from "./api.js";
import { renderPokemon } from "./render.js";

// Beispiel für den nächsten Schritt:
const pokemon = await getPokemon("pikachu");
renderPokemon(pokemon, document.querySelector("#pokemon-list"));
