import { retriveUserInfo } from "../services/randomuser.services.js";

//Retorna el genero, nombre, ubicación, correo electronico,
//fecha de nacimiento y un conjunto de 3 fotos de un usuario aleatorio
export const getRandomUser = async (req, res) => {
  try {
    //Se recoge la información del usuario (JSON)
    const response = await retriveUserInfo();

    //Del JSON se extrae los parametros que deseamos utilizar
    const { gender, name, location, email, dob, picture } = response;

    //Se trabajan los parametros que necesiten ser transformados
    //El genero y el correo no requieren de transformación

    //El parametro 'name' esta conformado por: {title, first, last}
    //Se concatena en un solo string
    const fullName = `${name.first} ${name.last}`;

    //El parametro 'location' esta conformado por: {street, city, state, counter, postcode, coordinates, timezone}
    //De la información brindada, solo se escogera las 4 primeras
    const cLocation = {
      country: location.country,
      state: location.state,
      city: location.city,
      street: location.street,
    };

    //El parametro dob esta conformado por: {date, age}
    //Extraemos la información de date que está en formato timestamp
    //Y se concatena en formato (dd/mm/yy)
    const date = dob.date.split("-");
    const year = date[0];
    const month = date[1];
    const day = date[2].slice(0, 2);
    const birthdate = `${day}/${month}/${year}`;

    //El parametro picture esta conformado por: {large, medium, thumbnail}
    //Estos representan distintas resoluciones, por lo que de preferencia no se descartan ningunas

    //Se guarda esta información en un JSON data
    const data = {
      gender: gender,
      name: fullName,
      location: cLocation,
      email: email,
      birthdate: birthdate,
      picture: picture,
    };

    //Y se envia como respuesta
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
