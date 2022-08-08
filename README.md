# Authentication microservice
Nodejs server and mongodb database

## ports
server listen at port 3000 and db listen at port 27017

## register 
post to localhost:3000/users/register

username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
}

## login 
post to localhost:3000/users/login

username: {
        type: String,
        required: true,
},
password: {
        type: String,
        required: true,
}

## build:
docker compose up --build

## start / stop
docker compose up
docker compose down

