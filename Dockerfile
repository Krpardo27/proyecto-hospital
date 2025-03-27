# Usamos Node.js como base
FROM node:18-alpine

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos los archivos necesarios
COPY package.json package-lock.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el código fuente
COPY . .

# Exponemos el puerto en el que Vite corre por defecto
EXPOSE 5173

# Comando para iniciar la aplicación en modo desarrollo
CMD ["npm", "run", "dev", "--", "--host"]
