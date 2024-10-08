import { Router } from "express";
import { syncCharacters } from "../controllers/characterController";

const CharacterRouter = Router();

CharacterRouter.post("/sync", syncCharacters)
// turnRouter.get("/:id", getAppointmentByIdController)
// turnRouter.post("/schedule" , createAppointmentIdController)
// turnRouter.put("/cancel/:id", cancelAppointmentByIdController)
export default CharacterRouter;