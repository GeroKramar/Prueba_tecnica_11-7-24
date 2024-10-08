import axios from 'axios';
import { Character } from '../entitie/characters_models';
 // Asegúrate de que el modelo esté correctamente importado

const RICK_AND_MORTY_API_URL = 'https://rickandmortyapi.com/api/character';

export const fetchAndStoreCharacters = async () => {
    try {
      const response = await axios.get(RICK_AND_MORTY_API_URL);
      const characters = response.data.results;
  
      for (const char of characters) {
        try {
            await Character.findOneAndUpdate(
                { name: char.name },
                {
                  name: char.name,
                  status: char.status,
                  species: char.species,
                  type: char.type,
                  gender: char.gender,
                  origin: char.origin,
                  location: char.location,
                  image: char.image,
                  episode: char.episode,
                },
                { upsert: true }
              );
              console.log(`Personaje guardado: ${char.name}`); // Confirmar que se guardó
              
        } catch (error) {
          console.error('Error al guardar personaje:', char.name, error);
        }
      }
  
      console.log('Personajes sincronizados correctamente');
    } catch (error) {
      console.error('Error al sincronizar personajes:', error);
    }
  };
  