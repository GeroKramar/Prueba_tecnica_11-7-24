# Usar una imagen de Node.js
FROM node:18-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Dar permisos de ejecución al compilador tsc
RUN chmod +x ./node_modules/.bin/tsc

# Compilar el código TypeScript
RUN npm run build

# Exponer el puerto
EXPOSE 3000

# Comando para ejecutar la app
CMD ["npm", "start"]
