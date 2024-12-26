# Clean archirecture

## Quick start

You can run the project locally with:

```sh
$ npm run dev
```
Install depedencies

```sh
$ npm i express dotenv body-parser
```

Install dev depedencies

```sh
$ npm i -D @types/express @types/body-parser 
```

```sh
$ npm i -D prettier typescript
```

```sh
$ npm i -D nodemon
```

### Create first controller

Install depedencies

```sh
$ npm i tsoa reflect-metadata
```

Create a controller folder inside infrastructure/api

```sh
$ mkdir infrastructure/api/controllers
```

Create our first controller

```sh
$ touch infrastructure/api/controllers/book.controller.ts
```

### Create first DTO

Install depedencies

```sh
$ npm i zod
```

Create a dto folder inside infrastructure/api/controllers

```sh
$ mkdir infrastructure/api/controllers/dto
```

Create our first dto

```sh
$ touch infrastructure/api/controllers/dto/book.dto.ts
```

### Create first Encoder/Decoder

Create our first codec

```sh
$ touch infrastructure/api/controllers/book.codec.ts
```
