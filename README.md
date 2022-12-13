# Curso Fullstack MERN
## Scripts



    "scripts": {
        "test": "jest",
        "build": "npx tsc",
        "start": "node dist/index.js",
        "dev": "concurrently \" npx tsc --watch\" \"nodemon -q dist/index.js\"",
        "serve:coverage":"npm run test && cd coverage/lcov-report && npx serve"
      }

## Explicación

- test: ejecuta jest para hacer pruebas.
- build: ejecuta el compilador de TS.
- start: ejecuta el js transpilado de ts.
- dev: ejecuta 2 comandos el estado del compilador gracias a `--watch` y nos ejecuta el codigo js transpilado.
- serve:coverage : ejecuta el script test para pruebas entra a las carpetas de reporte y levanta un servidor.

##Dependencias


    "dependencies": {
        "dotenv": "^16.0.3",
        "express": "^4.18.2"
      }

##Explicación
- dotenv: modulo que carga variables de entorno desde el archivo .env.
- express: es un framework o entorno de trabajo para aplicaciones web creadas en node.

##DevDependencias


    "devDependencies": {
        "@types/express": "^4.17.14",
        "@types/jest": "^29.2.4",
        "@types/node": "^18.11.13",
        "@typescript-eslint/eslint-plugin": "^5.46.0",
        "concurrently": "^7.6.0",
        "eslint": "^8.29.0",
        "eslint-config-standard-with-typescript": "^23.0.0",
        "eslint-plugin-import": "^2.26.0",
        "eslint-plugin-n": "^15.6.0",
        "eslint-plugin-promise": "^6.1.1",
        "jest": "^29.3.1",
        "nodemon": "^2.0.20",
        "serve": "^14.1.2",
        "supertest": "^6.3.3",
        "ts-jest": "^29.0.3",
        "ts-node": "^10.9.1",
        "typescript": "^4.9.4",
        "webpack": "^5.75.0",
        "webpack-cli": "^5.0.1",
        "webpack-node-externals": "^3.0.0",
        "webpack-shell-plugin": "^0.5.0"
      }

- @types: incluir compatibilidad con TS.
- concurrently: paquete que puede ejecutar mas de un comando a la vez.
- eslint: un estandarizador de escritura de codigo para evitar confunciones entre los devs.
- jest: Es un marco de prueba para nuestro codigo.
- nodemon: monitorea cualquier cambio en nuestro directorio y reinicia nuestro servidor o aplicaciones.
- serve: levanta un servidor para nuestra pag estatica o SPA.
- ts_node: Es un motor de ejecución para TS.
- Typescript: lenguaje de programacion derivado de js con tipado fuerte.
- webpack: es un empaquetador de modulos.


###End