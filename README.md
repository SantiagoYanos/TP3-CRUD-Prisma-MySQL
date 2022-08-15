User

localhost:3000/api/v1/users/
POST -> create New User
Get -> get all Users

Example
POST
{
	"name" : "Nahuel",
	"email" : "nahuel@avalith.com",
	"age" : 30 ,
	"country" : "Argentina",
	"role" : "USER"
}


localhost:3000/api/v1/users/id
Get -> Get one user 

Put -> Update user 
Example
{
	"age" : 26
	"email" : "modificando@hotmail.com",
	
}

Delete -> Delete User

-----------------------
Posts 

localhost:3000/api/v1/posts/
Post -> Create new post 

Get -> Get all post
Example 
{
		"title": "Hola Mundo",
		"content": "Bienvenido",
		"authorId": 3,
		"categoryId": 1
}


localhost:3000/api/v1/posts/id
Put -> Update post

Example
{
	"title" : "probando22" , 
	"content" : "content" , 
	"published" : true
}


Delete -> Delete post


Categories 

localhost:3000/api/v1/categories
Post -> Create new category 

Example 
	{
		"name" : "Ciencia Ficcion"
	}


Get -> Get all catergories

localhost:3000/api/v1/categories/id

Put -> Update category
Example
{
			"name" : "Romance"
}

Delete -> Delete category
 
Get -> Get one category