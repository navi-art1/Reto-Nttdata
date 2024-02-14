import axios from "axios";
import { RANDOM_URI } from "../config.js";

export const retriveUserInfo = async (req, res) => {
  try {
    //Se hace una consulta GET a la API para obtener la información
    const response = await axios.get(RANDOM_URI);

    //Se retorna la información que es un JSON
    return response.data.results[0];
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
