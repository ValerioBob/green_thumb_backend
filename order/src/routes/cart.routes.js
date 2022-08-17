const router = require("express").Router();

const cartCTRL = require("../controllers/CartController");

const { isAuth } = require("../helpers/jwt");


router.get("/:cartId", cartCTRL.getCart);
router.post("/:cartId/:productId", isAuth, cartCTRL.addProduct);
router.delete("/:cartId/:productId", isAuth, cartCTRL.removeProduct);
router.delete("/:cartId", isAuth, cartCTRL.deleteCart);

module.exports = router;