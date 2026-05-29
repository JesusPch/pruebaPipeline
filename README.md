# ApiCanva
Api Rest con node js, express, conexion con postgresql, ORM sequelize. canva de ejemplo con rutas, controladores,models.

# Instalacion y Descarga de Dependencias
1 Clonar Repo  ``` git clone https://github.com/JesusPch/ApiCanva.git```

2 Descarga node modules ```npm init```

3 Descargar ORM, framework, Conexio a BD ``` npm i express sequelize pg-hstore```

4 Correr Proyecto ```npm run dev```

# Creacion de contenedor 
```docker build -f DockerFile -t prueba-api .```(creacion de imagen)

```docker run -d -p 3000:3000 --name prueba-api --add-host=host.docker.internal:host-gateway prueba-api```  (correr imagen con network)

```docker stop <nombre de imagen>``` (detiene la imagen)

```docker start <nombre de la imagen>```(inicializa la imagen)

```doker rm <nombre de la imagen>```(remover imagen)