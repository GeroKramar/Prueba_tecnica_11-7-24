import axios from 'axios';
import { Character } from '../entitie/characters_models';


const RICK_AND_MORTY_API_URL = 'https://rickandmortyapi.com/api/character';

export const fetchAndStoreCharacters = async () => {
  try {
    const response = await axios.get(RICK_AND_MORTY_API_URL);
    const characters = response.data.results;

    
    for (const char of characters) {
      await Character.findOneAndUpdate(
        { name: char.name }, 
        {
          name: char.name,
          status: char.status,
          species: char.species,
          type: char.type || 'Unknown',
          gender: char.gender,
          origin: char.origin,
          location: char.location,
          image: char.image,
          episode: char.episode,
        },
        { upsert: true } 
      );
    }

    console.log('Personajes sincronizados correctamente');
  } catch (error) {
    console.error('Error al sincronizar personajes:', error);
  }
};
