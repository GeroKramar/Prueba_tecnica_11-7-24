
import { Character } from '../entitie/characters_models';

export const createCharacter = async (data: any) => {
    try {
      const newCharacter = new Character(data);
      return await newCharacter.save();
    } catch (error) {
      throw new Error('Error al crear el personaje');
    }
  };

  export const getAllCharacters = async (page: number, limit: number) => {
    const skip = (page - 1) * limit;
    try {
      const characters = await Character.find()
        .skip(skip)
        .limit(limit);
      const total = await Character.countDocuments();
      return { characters, total, totalPages: Math.ceil(total / limit), currentPage: page };
    } catch (error) {
      throw new Error('Error al obtener los personajes');
    }
  };
  
  export const getCharacterById = async (id: string) => {
    try {
      const character = await Character.findById(id);
      if (!character) throw new Error('Personaje no encontrado');
      return character;
    } catch (error) {
      throw new Error('Error al obtener el personaje');
    }
  };
  export const updateCharacter = async (id: string, data: any) => {
    try {
      const updatedCharacter = await Character.findByIdAndUpdate(id, data, { new: true });
      if (!updatedCharacter) throw new Error('Personaje no encontrado');
      return updatedCharacter;
    } catch (error) {
      throw new Error('Error al actualizar el personaje');
    }
  };
  export const deleteCharacter = async (id: string) => {
    try {
      const deletedCharacter = await Character.findByIdAndDelete(id);
      if (!deletedCharacter) throw new Error('Personaje no encontrado');
      return deletedCharacter;
    } catch (error) {
      throw new Error('Error al eliminar el personaje');
    }
  };
        