import server from "./server";
import { PORT } from "./config/envs";
import { connectToDatabase } from "./config/data-source";

connectToDatabase()
  .then(() => {
    server.listen(PORT || 3000, () => {
      console.log(`Servidor escuchando en el puerto: ${PORT || 3000}`);
    });
  })
  .catch((error) => {
    console.error('Error al iniciar el servidor:', error);
  });




