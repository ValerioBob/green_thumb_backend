const router = require("express").Router();

const userCTRL = require("../controllers/UserController");

const { isAuth } = require("../helpers/jwt");

router.post("/login", userCTRL.login);
router.post("/register", userCTRL.register);
router.get("/:userId", userCTRL.getUser);



module.exports = router;