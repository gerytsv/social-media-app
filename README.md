<h2>1. Open backend folder and install the dependancies.</h2>

        npm i 

<h2>2. Set the database.</h2>

Open my MySql Workbench and create new Schema with name

    socialdb

`` Set the default charset to utf-8``

Create new file with name **ormconfig.json** to set cofigurations for the typeorm. <br>
**The file must be in the backend folder.**
Just replace with your password and username.<br>
``The file should include the following code:`` 

        {
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": "root",
        "password": "mypassword123",
        "database": "socialdb",
        "synchronize": true,
        "logging": false,
        "entities": ["src/database/entities/**/*.ts"],
        "migrations": ["src/database/migration/**/*.ts"],
        "cli": {
            "entitiesDir": "src/database/entities",
            "migrationsDir": "src/database/migration"
        }

    
Set the .env file following the example :<br>
**The file must be in the backend folder.**
replace with your data. 

        PORT=3000
        DB_TYPE=mysql
        DB_HOST=localhost
        DB_PORT=3306
        DB_USERNAME=root
        DB_PASSWORD=mypassword123
        DB_DATABASE_NAME=socialdb

If you need to test with some data.<br>
There is a prepared file in the root folder  

Which is a self-contained file,
    and import it in the **socialdb** schema.

<h2>3. Open front-end folder and install the dependancies.</h2>

        npm i 

To start the back-end server open backend folder

        npm run start:dev

To start the client :

        ng serve --open 

The port is http://localhost:4200/




    

