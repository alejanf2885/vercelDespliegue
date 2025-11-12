import { useEffect, useState } from "react";
import axios from "axios";

export default function HomeComponents() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getRandomPokemonId = () => Math.floor(Math.random() * 1010) + 1;

  const fetchPokemon = async () => {
    setLoading(true);
    setError(null);
    try {
      const id = getRandomPokemonId();
     // const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
     const pokeApiUrl = process.env.REACT_APP_URLPOKEAPI;
     const res = await axios.get(`${pokeApiUrl}/api/v2/pokemon/${id}`);
     console.log()

      setPokemon(res.data);
    } catch (err) {
      console.log(err)
      setError("Error al obtener el Pokémon 🥲");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon(); 
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-yellow-100">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-yellow-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen bg-red-100">
        <p className="text-red-600 text-xl font-semibold">⚠️ {error}</p>
        <button
          onClick={fetchPokemon}
          className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Reintentar
        </button>
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 p-6">
      <h1 className="text-4xl font-extrabold mb-6 text-yellow-600 drop-shadow-md">
        Pokémon API Demo
      </h1>

      <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-yellow-200 w-80">
        <div className="relative">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="mx-auto w-36 h-36 drop-shadow-lg"
          />
          <div className="absolute top-0 right-0 bg-yellow-400 text-white text-sm px-3 py-1 rounded-bl-xl rounded-tr-2xl font-semibold">
            #{pokemon.id}
          </div>
        </div>

        <h2 className="text-2xl font-bold capitalize mt-4 text-gray-800">{pokemon.name}</h2>

        <div className="mt-3 space-y-1 text-gray-700">
          <p>
            <strong>Altura:</strong> {pokemon.height}
          </p>
          <p>
            <strong>Peso:</strong> {pokemon.weight}
          </p>
          <p className="mt-2">
            <strong>Habilidades:</strong>{" "}
            <span className="italic text-gray-600">
              {pokemon.abilities.map((a) => a.ability.name).join(", ")}
            </span>
          </p>
        </div>

        <button
          className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-xl shadow-md transition-colors duration-200"
          onClick={fetchPokemon}
        >
          🔄 Cargar otro Pokémon
        </button>
      </div>
    </div>
  );
}
