import { Request, Response } from 'express';
import { fetchAndStoreCharacters } from '../services/rickAndMortyService';

export const syncCharacters = async (req: Request, res: Response) => {
  try {
    await fetchAndStoreCharacters();
    res.status(200).send('Personajes sincronizados correctamente');
  } catch (error) {
    res.status(500).json({ error: 'Error al sincronizar los personajes' });
  }
};
