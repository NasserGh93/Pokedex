const API_BASE_URL = "https://pokeapi.co/api/v2";

/** Lädt ein Pokémon über seinen Namen oder seine ID. */
export async function getPokemon(nameOrId) {
  const identifier = String(nameOrId).trim().toLowerCase();
  const response = await fetch(
    `${API_BASE_URL}/pokemon/${encodeURIComponent(identifier)}`,
  );

  if (!response.ok) {
    throw new Error(`Pokémon konnte nicht geladen werden (${response.status}).`);
  }

  return response.json();
}
