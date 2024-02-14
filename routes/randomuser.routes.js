import { Router } from "express";

import { getRandomUser } from "../controllers/randomuser.controller.js";

//Se inicia el router
const router = Router();

//Se crea la ruta para obtener un usuario
router.get("/randomuser", getRandomUser);

export default router;
