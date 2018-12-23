# React/Next + GraphQL/Apollo + MongoDB example

I started working on this project a few weeks ago, with the aim to create an application using all these technologies.

I knew React and a bit of MongoDB, and I wanted to challenge myself with this project.

This is a small example of what you can do with these librairies, combining the power of each one to make a great serverless application.

For those who don't know one of them, follow the links below to learn more :

- [React.js](https://github.com/facebook/react) (A popular JavaScript library made by Facebook for building user interfaces)
- [Next.js](https://github.com/zeit/next.js/) (A framework built for React that brings Server-Side Rendering, Routing and some other great built-in tools)
- [GraphQL](https://github.com/facebook/graphql) (A powerful query language for API, developed and used by Facebook)
- [Apollo](https://github.com/apollographql) (Some great tools like ApolloClient and ApolloServer which makes GraphQL much more efficient)
- [MongoDB](https://github.com/mongodb/mongo) (A popular NoSQL database program, document oriented)

All of these technologies work perfectly together with a few configurations.

## Getting started

### Starting MongoDB

The MongoDB database is mounted on a Docker container. You will find a `docker-compose.yml` file in the `docker` directory.
It contains the minimum configuration for the database.

If you don't have Docket yet, just [install it](https://www.docker.com/) now. It's pretty easy.

When you have Docker installed, just open a terminal and place yourself in the docker directory (in this project).

Just execute this line :

```
docker-compose up
```

Docker container should start and stay up. Check you have no errors, and let this window opened.

Now you're database is up and running, you should connect to it from the application (see below) or from a software like [Robo-3T](https://robomongo.org/) with the following credentials :

```
Host : localhost
Port : 27017
Database : mydatabase
Login : root
Password : root
```

These credentials have been already configured in Mongo.

### Starting the application

If you open the `package.json` file, you can see the available commands.

- `dev` : Start the front-end application in development mode
- `build` : Build the application for production
- `start` : Start the application with the production build
- `server:start` : Start the GraphQL server
- `eslint` : Launch ESLint into sources directories

I used `yarn` as package manager, it's exactly like `npm`, but really faster.

You can install it globally, running this command :

```
npm install -g yarn
```

Then, you can run the application. First, you need to start the GraphQL server :

```
yarn server:start
```

You should see a confirmation message, when the server is up.
Otherwise, check the error message and your db credentials.

If everything is fine, open a new window and start the application in dev mode :

```
yarn dev
```

By default, the application will start on port 3000. But you can add a flag to change this :

```
yarn dev --port=3001
```

If the application successfully compiles, open your browser at `http://localhost:3000` or with the port you chose, and welcome on board !

## Let's improve the code

Feel free to ask questions, add issues or send pull requests. I'm interested in every tips and advices you can give to improve the code.
