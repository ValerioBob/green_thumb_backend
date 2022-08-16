const router = require("express").Router();

const productCTRL = require("../controllers/CartController");

const { isAuth } = require("../helpers/jwt");


router.get("/:cartId", productCTRL.getCart);
router.post("/:cartId/:productId", isAuth, productCTRL.addProduct);
// router.put("/:productId", isAuth, productCTRL.updateProduct);
// router.delete("/:productId", isAuth, productCTRL.deleteProduct);

module.exports = router;