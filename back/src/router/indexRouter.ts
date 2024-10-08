import { Router } from "express";
import CharacterRouter from "./characterRouter";

const router = Router();


router.use("/characters", CharacterRouter )


export default router;
