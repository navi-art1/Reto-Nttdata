import express from "express";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import randomuserRoute from "./routes/randomuser.routes.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//Middlewares
app.use(cors());
app.use(express.json());

//Rutas
app.use(randomuserRoute);

//Vista principal para el Frontend
app.use(express.static(join(__dirname, "front")));


export default app;
