# Proyecto Discord Logger

## Descripción

Este proyecto es una API de registro de logs para Discord, construida con el framework NestJS y utilizando TypeScript. La API permite generar una API KEY y enviar logs a Discord.

## Estructura del Proyecto

El proyecto se divide en los siguientes módulos:

- **src/api**: Contiene la lógica de la API, incluyendo los controladores, servicios y modelos de datos.
- **src/bot**: Contiene la lógica del bot de Discord, incluyendo los eventos y comandos.
- **src/common**: Contiene utilidades y tipos de datos comunes utilizados en todo el proyecto.

## Módulos y Dependencias

El proyecto utiliza las siguientes dependencias:

- `discord.js`: Biblioteca para interactuar con la API de Discord. 
- `necord`: Biblioteca para crear bots de Discord con NestJS.

## Iniciar el Proyecto

Para iniciar el proyecto, sigue los siguientes pasos:

1- Clona el repositorio: Clona el repositorio del proyecto utilizando el comando:

```bash
$ git clone https://github.com/tu-usuario/tu-repositorio.git.
```

2- Instala las dependencias: Instala las dependencias del proyecto utilizando el comando:

```bash
$ pnpm install 
 
$ npm install.

$ bun install
```

3- Inicia el proyecto: Inicia el proyecto utilizando el comando pnpm run start o npm run start. La API estará disponible en http://localhost:3000.
Verifica la documentación: Verifica la documentación de la API en http://localhost:3000/docs.

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod

# development
$ bun start

# watch mode
$ bun start:dev

# production mode
$ bun start:prod
```

## Documentacion 

Para saber como estan estructurados los endpoints al ejecutar el proyecto ir a la url /docs, donde se encuentra el swagger

## Endpoints

La API tiene los siguientes endpoints:

- `POST /auth`: Generar una API KEY.
- `POST /logger`: Enviar un log a Discord.

## Configuración

La configuración del proyecto es sencilla solo necesitas un token de una aplicación de discord y una frase para el JWT, Se pueden configurar los siguientes parámetros:

- `DISCORD_TOKEN`: Token para la el bot de discord.
- `JWT_SECRET`: Secreto para la autenticación JWT.

## Funcionalidades

La API ofrece las siguientes funcionalidades:

- Generar una API KEY para enviar logs a Discord.
- Enviar logs a Discord utilizando la API KEY.