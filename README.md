# Authentication microservice
Nodejs server and mongodb database

## ports
server listen at port 3000 and db listen at port 27017

## register 
POST to localhost:3000/users/register
```
   seller: {
        type: Boolean,
        required: true,
    },
    fullname: {
        type: String,
        required: true,
    },

    birth: {
        type: Date,
        required: true,
    },
    fiscalcode: {
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
```
## login 
POST to localhost:3000/users/login
```
email: {
        
        type: String,
        required: true,
        
},

password: {
        
        type: String,
        required: true,
        
}
```
## build:
docker compose up --build

## start / stop
docker compose up

docker compose down

