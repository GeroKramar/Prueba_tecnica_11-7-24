import { Request, Response } from 'express';
import { fetchAndStoreCharacters } from '../services/rickAndMortyService';
import { createCharacter, deleteCharacter, getAllCharacters, getCharacterById, updateCharacter } from '../services/characterService';

export const syncCharacters = async (req: Request, res: Response) => {
  try {
    await fetchAndStoreCharacters();
    res.status(200).send('Personajes sincronizados correctamente');
  } catch (error) {
    res.status(500).json({ error: 'Error al sincronizar los personajes' });
  }
};

export const createCharacterController = async (req: Request, res: Response) => {
  try {
    const character = await createCharacter(req.body);
    res.status(201).json(character);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllCharactersController = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10; 
  try {
    const result = await getAllCharacters(page, limit);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};


export const getCharacterByIdController = async (req: Request, res: Response) => {
  try {
    const character = await getCharacterById(req.params.id);
    res.status(200).json(character);
  } catch (error:any) {
    res.status(404).json({ error: error.message });
  }
};

export const updateCharacterController = async (req: Request, res: Response) => {
  try {
    const updatedCharacter = await updateCharacter(req.params.id, req.body);
    res.status(200).json(updatedCharacter);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteCharacterController = async (req: Request, res: Response) => {
  try {
    await deleteCharacter(req.params.id);
    res.status(200).json({ message: 'Personaje eliminado con éxito' });
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};
