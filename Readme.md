### TodoList 


# Tech Stack and Frameworks Used

1. React.js 
2. Node.js  Nest.js framework
3. MongoDb for Database
4. Used Typescript 

 A user will be able to 

1. Register
2. Login
3. Create Todos
4. Read Todos 
5. Update Todos by ID
6. Delete Todo by ID


# Client
It contains mainly three Components Sign In , Register , Todo.

- Login Page

       A user will have two inputs username and password and button to log in.
       
- Register Page

       A user will have inputs for name, username, and password.
      
   ![register](https://user-images.githubusercontent.com/56127301/125492451-8d81f488-9323-4cc2-b6b4-efb04dcea676.png)


- Home Page

       A user can view Todos.

       Form to create todos with inputs for todo, description,status and button to create todo

       Delete Todo 

       Update Todo

    ![todolist](https://user-images.githubusercontent.com/56127301/125494641-ed95f72c-3734-48d1-b27d-9cc6125739c9.png)

-Update Todo 

        A user can update todo here.
        
   ![update](https://user-images.githubusercontent.com/56127301/125494881-a69c5889-3554-4108-acd8-3382365f9024.png)
  
# Server

It is made with NestJs using Typescript

- endpoints for user authentication

      POST auth/login
      
      POST user/register
    
- endpoints for CRUD of todos
    
      POST todo/create 
      PUT todo/update/
      GET todo/view
      DELETE todo/delete
  
-  Added swagger for API documentation 
-   Validations of data
-   Used Passport, JWT with Bearer token for Authentication 

![swagger](https://user-images.githubusercontent.com/56127301/125493350-9095ec4a-8877-48c1-8218-fbc2cde1b5ac.png)



 
 
