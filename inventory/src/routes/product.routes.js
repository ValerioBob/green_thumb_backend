const router = require("express").Router();

const productCTRL = require("../controllers/ProductController");

const { isAuth } = require("../helpers/jwt");

router.get("/", productCTRL.getProducts);
router.get("/:sellerId", productCTRL.getSellersProducts);
router.get("/:productId", productCTRL.getProduct);
router.post("/", productCTRL.createProduct);
router.put("/:productId", productCTRL.updateProduct);
router.delete("/:productId", productCTRL.deleteProduct);
router.put("/:productId", productCTRL.updateQuantity);

module.exports = router;