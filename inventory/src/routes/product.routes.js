const router = require("express").Router();

const productCTRL = require("../controllers/ItemController");

const { isAuth } = require("../helpers/jwt");

router.get("/", productCTRL.getProducts);
router.get("/:productId", productCTRL.getProduct);
router.post("/", isAuth, productCTRL.createProduct);
router.put("/:productId", isAuth, productCTRL.updateProduct);
router.delete("/:productId", isAuth, productCTRL.deleteProduct);

module.exports = router;