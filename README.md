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

        npm run start

Important! In order to run your nestjs Api you need to include

        getType(): string;        

in backend\node_modules\@nestjs\platform-express\adapters\express-adapter.d.ts  
This file should look like this.

        import { RequestMethod } from '@nestjs/common';
        import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
        import { NestApplicationOptions } from '@nestjs/common/interfaces/nest-application-options.interface';
        import { AbstractHttpAdapter } from '@nestjs/core/adapters/http-adapter';
        import { ServeStaticOptions } from './../interfaces/serve-static-options.interface';
        export declare class ExpressAdapter extends AbstractHttpAdapter {
        private readonly routerMethodFactory;
        constructor(instance?: any);
        reply(response: any, body: any, statusCode?: number): any;
        status(response: any, statusCode: number): any;
        render(response: any, view: string, options: any): any;
        redirect(response: any, statusCode: number, url: string): any;
        setErrorHandler(handler: Function): any;
        setNotFoundHandler(handler: Function): any;
        setHeader(response: any, name: string, value: string): any;
        listen(port: string | number, callback?: () => void): any;
        listen(port: string | number, hostname: string, callback?: () => void): any;
        close(): any;
        set(...args: any[]): any;
        enable(...args: any[]): any;
        disable(...args: any[]): any;
        engine(...args: any[]): any;
        useStaticAssets(path: string, options: ServeStaticOptions): any;
        setBaseViewsDir(path: string | string[]): any;
        setViewEngine(engine: string): any;
        getRequestMethod(request: any): string;
        getRequestUrl(request: any): string;
        enableCors(options: CorsOptions): void;
        createMiddlewareFactory(requestMethod: RequestMethod): (path: string, callback: Function) => any;
        initHttpServer(options: NestApplicationOptions): void;
        registerParserMiddleware(): void;
        private isMiddlewareApplied;
        getType(): string;
}



To start the client :

        ng serve --open 

The port is http://localhost:4200/




    

