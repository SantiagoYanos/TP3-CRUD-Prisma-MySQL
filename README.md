# TP 3: CRUD + Prisma (MySQL)

*Objetivo*: Servidor de Usuarios (User) y Posts (Post) con Categorías (Category).

## Grupo

- Ramiro Lewin
- Santiago Yanosky

## Stack

- Node.js
- Express
- Prisma (MySQL)

## Routes

### User

```
http://host/api/v1/users/ //Ruta de Usuarios (CRUD)
```

**POST -> create New User**
```
http://host/api/v1/users
```
_Example:_
```json
{
			"name": "Prueba",
			"email": "email@prueba-com",
			"age": 15,
			"country": "Argentina",
			"role": "USER"
}
```

**GET -> get all Users**
```
http://host/api/v1/users
```

_Example:_
```json
{
	"message": "Usuarios obtenidos con éxito!",
	"data": [
		{
			"id": 1,
			"name": "Prueba",
			"email": "email@prueba-com",
			"age": 15,
			"createdAt": "2022-08-09T21:53:55.298Z",
			"country": "Argentina",
			"role": "USER"
		},
		{
			"id": 2,
			"name": "Usuario 2",
			"email": "usuario2@gmail.com",
			"age": 35,
			"createdAt": "2022-08-10T22:09:05.144Z",
			"country": "Pais",
			"role": "USER"
		}
	]
}
```

**GET -> Get one user** 
```
http://host/api/v1/users/id
```
_Example_
```json
{
	"message": "Usuario obtenido con éxito!",
	"data": {
		"id": 1,
		"name": "Prueba",
		"email": "email@prueba-com",
		"age": 15,
		"createdAt": "2022-08-09T21:53:55.298Z",
		"country": "Argentina",
		"role": "USER",
		"posts": [
			{
				"id": 11,
				"title": "Este es un post",
				"content": "Contenido de un post",
				"createdAt": "2022-08-15T02:44:24.633Z",
				"published": false,
				"authorId": 1,
				"categoryId": 1
			},
			{
				"id": 12,
				"title": "Este es otro post",
				"content": "Contenido de un post",
				"createdAt": "2022-08-15T02:44:37.932Z",
				"published": false,
				"authorId": 1,
				"categoryId": 2
			}
		]
	}
}
```

**PUT -> Update user**

_Example_
```
http://host/api/v1/users/id
```
```json
{
	"age" : 26
	"email" : "modificando@hotmail.com",
	
}
```

**DELETE -> Delete User**
```
http://host/api/v1/users/id
```
_Example_
```json
{
	"message": "Usuario borrado con éxito!"
}
```
-----------------------
### Posts

```
http://host/api/v1/posts/ //Ruta de Posts (CRUD)
```

**POST -> Create new post** 
```
http://host/api/v1/posts
```
_Example_
```json
{
		"title": "Hola Mundo",
		"content": "Bienvenido",
		"authorId": 3,
		"categoryId": 1
}
```

**GET -> Get all post**
```
http://host/api/v1/users
```
_Example_ 
```json
{
	"message": "Post obtenidos con éxito!",
	"data": [
		{
			"id": 11,
			"title": "Este es un post",
			"content": "Contenido de un post",
			"createdAt": "2022-08-15T02:44:24.633Z",
			"published": false,
			"authorId": 1,
			"categoryId": 1
		},
		{
			"id": 12,
			"title": "Este es otro post",
			"content": "Contenido de un post",
			"createdAt": "2022-08-15T02:44:37.932Z",
			"published": false,
			"authorId": 1,
			"categoryId": 2
		}
	]
}
```

**PUT -> Update post**
```
http://host/api/v1/posts/id
```
_Example_
```json
{
	"title" : "probando22" , 
	"content" : "content" , 
	"published" : true
}
```

**DELETE -> Delete post**
```
http://host/api/v1/posts/id
```
_Example_
```json
{
	"message": "Post eliminado correctamente!!",
	"data": {
		"id": 12,
		"title": "Este es otro post",
		"content": "Contenido de un post",
		"createdAt": "2022-08-15T02:44:37.932Z",
		"published": false,
		"authorId": 1,
		"categoryId": 2
	}
}
```
********************
### Categories 
```
http://host/api/v1/categories/ //Ruta de Categorías (CRUD)
```
**POST -> Create new category** 
```
http://host/api/v1/categories/
```

_Example_ 
```json
	{
		"name" : "Ciencia Ficcion"
	}
```
**GET -> Get all categories**
```
http://host/api/v1/categories
```
_Example_
```json
{
	"message": "Se obtuvieron las categorías correctamente",
	"data": [
		{
			"id": 1,
			"name": "Category 1"
		},
		{
			"id": 2,
			"name": "Category 2"
		}
	]
}
```
**GET -> Get one category**
```
http://host/api/v1/categories/id
```
_Example_
```json
{
	"message": "Se obtuvo las categoria correctamente",
	"data": {
		"id": 1,
		"name": "Category 1",
		"posts": [
			{
				"id": 11,
				"title": "Este es un post",
				"content": "Contenido de un post",
				"createdAt": "2022-08-15T02:44:24.633Z",
				"published": false,
				"categoryId": 1
			}
		]
	}
}
```

**PUT -> Update category**
```
http://host/api/v1/categories/id
```
_Example_
```json
{
			"name" : "Romance"
}
```

**DELETE -> Delete category**
```
http://host/api/v1/categories/id
```
_Example_
```json
{
	"message": "Se eliminó la categoría correctamente!",
	"data": {
		"id": 4,
		"name": "Categoría Ejemplo"
	}
}
```

## Environment Variables

`Ex: mysql://root:password@localhost:port/dbName`

```
DATABASE_URL="protocol//[hosts][/database][?properties]"
```
