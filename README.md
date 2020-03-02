# LinkApi Challenge - Full-stack

This repository contains an application design for the requested project in the LinkApi Challenge - Full-Stack.

## Introduction

The application was developed using Node.js and Express as the back-end programming language and back-end framework, respectively, MongoDB as the database, and Vue.js as the front-end framework.

In its infrastructure, Docker containers were mounted, to make the building process easy.

**OBS:** Unfortunately, I was not able to cover everything that was asked on the challenge. However, I hope what I have done was enough to show my skills.

## Setup

Since I have used Docker to mount the application's infrasctrucure, it is really easy to set up the project. You will only need `docker` and `docker-compose` installed in your local OS.

With that said, to run the application, you can simply clone this repository and run a couple of docker commands:

```
# docker-compose build
# docker-compose up
```

That's it!

The above commands will build the application backend on a development environment, then they will prepare the database to be used, the front-end framework to consume the API, and finally they will run the application on port 8080.

The above commands will build the application on a development environment, then they will prepare the database to be used, and finally they will run the application on port 3000.

## The application

With the application running, it is possible to run it at `http://127.0.0.1:8080`.

I have created and SPA, with Vue.js consuming the API, so in the home page of the application you will be able to test a lot of the applications functionalities, such as: creating a vehicle, fetching all of them, deleting a single one of them, and searching for a vehicle object in the collection on the database.

As mentioned above, each request of the application consumes the API created on the backend using Express.js.

## Conclusion

Despite not making everything that was suggested on the test, because of the short time I had to delevop it, I hope what I did is enough to show my skills as a full-stack developer.
