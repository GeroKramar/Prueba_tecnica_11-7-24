import { Router } from "express";
import { createCharacterController, deleteCharacterController, getAllCharactersController, getCharacterByIdController, syncCharacters, updateCharacterController } from "../controllers/characterController";

const CharacterRouter = Router();

CharacterRouter.get("/", getAllCharactersController)
CharacterRouter.get("/:id", getCharacterByIdController)
CharacterRouter.post("/sync", syncCharacters)
CharacterRouter.post("/create", createCharacterController)
CharacterRouter.delete("/delete/:id", deleteCharacterController)
CharacterRouter.put("/update/:id", updateCharacterController)

export default CharacterRouter;