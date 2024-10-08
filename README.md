
# Rick and Morty Backend (Node.js + Express + MongoDB)

# Rick and Morty Backend
Este es el backend de la aplicación de personajes de Rick and Morty, construido con **Node.js**, **Express** y **MongoDB**. Proporciona una API REST para gestionar los personajes.

## Tecnologías
- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework de servidor web.
- **MongoDB**: Base de datos NoSQL.
- **Mongoose**: ODM para MongoDB.
- **Railway**: Despliegue del backend.

## Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/GeroKramar/Prueba_tecnica_11-7-24

2. Instalar dependencias:
    ```bash
    cd back
    npm install
3. Crear un archivo .env.local en el directorio raíz y agregar la URL de tu backend
    ```bash
    PORT=3000
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/dbname?retryWrites=true&w=majority


4. Iniciar el servidor:
    ```bash
    npm start

#### La app estará disponible en http://localhost:3000.

# Documentacion en *SWAGGER*
- https://app.swaggerhub.com/templates-docs/GEROKRAMAR/PuebaTecnicaDezlab/1.0.0

## Endpoints
- GET /characters: Obtener todos los personajes con paginación.
- POST /characters/create: Crear un nuevo personaje.
- DELETE /characters/delete/:id: Eliminar un personaje.
## Scripts
- npm run dev: Ejecuta el servidor en modo desarrollo.
- npm run start: Ejecuta el servidor en producción.
## Despliegue
El backend está desplegado en Railway.

### Contribuir
Hacer fork del proyecto.
Crear una nueva rama para tus cambios (git checkout -b feature-xyz)