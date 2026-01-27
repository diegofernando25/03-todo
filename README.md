# DEVELOPMENT
Pasos para levantar la base de datos

1. Levantar la base de datos
````
docker compose up -d
````

2. Conectarse con table plus
```
Abrimos el menu, generamos un DB en postgressql
>> En lazamos: tres veces 'postgres' y test
```
3. Prisma Commands
````
npx prisma init
npx prisma migrate dev
cliente de prisma: npx prisma generate
para conexión: npm i @prisma/adapter-pg
````

4. Copiar, pegar y renombrar el .env
`````
Genera una copia del .env, cambia el nombre por
.env.template
`````

NOTA
- Si al ejecutar: npx prisma migrate dev marca error (por la importación del prisma config) entonces ejecuta: 
> npm i dotenv
> npm i -D @prisma/config

5. Ejecutar el seed para crear la base de datos
`````
localhost:3000/api/seed
`````# 03-todo
