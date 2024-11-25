Aplicacion para solicitar turnos de depilacion definitiva:
Observaciones: 
1. Se separa la instanciacion del router y las rutas; en una carpeta especifica.
2. Se separan los componentes segun sus funcionalidades, se hace una carpeta de vistas, para los componentes que generan diferentes vistas.
3. Se genera una carpeta de servicios, donde se llama a la a API de persistencia (https://mockapi.io/)
4. Por el momento solo se persisten usuarios y turnos.
5. Se utiliza una carpeta para los store´s, por si eventualmente hubiese mas de uno.


# clinicaApp

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
