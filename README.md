
# TuHotel - Backend

Este es el backend de la aplicación TuHotel, una plataforma que gestiona reservas de hoteles, incluyendo la administración de hoteles y habitaciones. Esta aplicación está desarrollada con Node.js y Express, y utiliza varias tecnologías para proporcionar una API robusta y segura.

## Características

- **Gestión de usuarios**: Registro e inicio de sesión de usuarios, con roles específicos como administrador.
- **Gestión de hoteles y habitaciones**: CRUD (Crear, Leer, Actualizar, Eliminar) de hoteles y habitaciones.
- **Reservaciones**: Creación, visualización y gestión de reservaciones por parte de los usuarios.
- **Autenticación y autorización**: Implementación de autenticación JWT para asegurar las rutas de la API.
  
## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para construir el servidor backend.
- **Express.js**: Framework para construir la API REST.
- **MongoDB**: Base de datos NoSQL para almacenar la información de hoteles, habitaciones, usuarios y reservaciones.
- **Mongoose**: ORM para MongoDB, que facilita la interacción con la base de datos.
- **JWT (JSON Web Tokens)**: Para la autenticación segura de usuarios.
- **Bcrypt**: Para el hash de contraseñas.
- **Dotenv**: Manejo de variables de entorno.

## Configuración del entorno

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Josealjaga/tuhotel-back.git
   ```

2. Instala las dependencias:

   ```bash
   cd tuhotel-back
   npm install
   ```

3. Configura las variables de entorno:

   Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables:

   ```plaintext
   PORT=3000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_secret_key
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm start
   ```

   El servidor se ejecutará en `http://localhost:3000`.

## Scripts disponibles

- **`npm start`**: Inicia el servidor en modo de producción.
- **`npm run dev`**: Inicia el servidor en modo de desarrollo con recarga automática.
- **`npm test`**: Ejecuta las pruebas.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
