const router = require("express").Router();

const userCTRL = require("../controllers/UserController");

const { isAuth } = require("../helpers/jwt");



router.post("/login", userCTRL.login);
router.post("/register", userCTRL.register);
router.get("/:userId", userCTRL.getUser);



module.exports = router;


// const User = require('../models/UserModels')
// const bcrypt = require('bcryptjs');
// const auth = require('../helpers/jwt.js')


// async function login({ email, password }) {
//     const user = await User.findOne({email});
//     // synchronously compare user entered password with hashed password
//     if(user && bcrypt.compareSync(password, user.password)){
        
//         const token = auth.generateAccessToken(email);

//         // call toJSON method applied during model instantiation
//         return {...user.toJSON(), token}
//     }
// }

// async function register(params){
//     // instantiate a user modal and save to mongoDB
//     const user = new User(params)
//     try{
//     await user.save();}
//     catch(e){
//         return 'error';
//     }
// }

// async function getById(id) {

//     const user = await User.findById(id);
//     // call toJSON method applied during model instantiation
//     return user.toJSON()
// }

// module.exports = {
//     login,
//     register,
//     getById
// };