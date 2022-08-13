const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const userServices = require('../services/UserServices.js');
const User = require('../models/UserModels.js');

router.post('/register', (req, res, next) => {
    
    const {password} = req.body
    const salt = bcrypt.genSaltSync(10);
    
    req.body.password = bcrypt.hashSync(password, salt);
    userServices.register(req.body).then(
    function(x){
        if(x!='error') res.json({success:true})
        else res.json({success:'User already exists'})
})
})

router.put('/courier', async (req, res) => {
    const {id, latitude, longitude} = req.body
//     userServices.updatePosition(id, latitude, longitude).then(
//         function(x){
//             if(x!='error') res.json({success:true})
//             else res.json({success:'Position error'})
// })

    await User.findByIdAndUpdate(id, { latitude: latitude, longitude: longitude}).then(
   
    function(x){
        if(x!='error') res.json({success:true})
        else res.json({success:'Position error'})
})

})

router.post('/login', (req, res, next) => {
    const { email, password} = req.body;
    userServices.login({email, password}).then(user => {
            user ? res.json(user) : res.json({ error: 'Email or password is incorrect' });
        }
    ).catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
    userServices.getById(req.params.id).then(
        (user) => res.json(user)
    ).catch(err => next(err))
})

module.exports = router;