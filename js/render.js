/** @format */

export function renderPokemon(pokemon, container) {
  const card = document.createElement("article");
  const title = document.createElement("h2");
  title.textContent = pokemon.name;
  card.append(title);
  container.append(card);
}
