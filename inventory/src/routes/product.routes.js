const router = require("express").Router();

const productCTRL = require("../controllers/ItemController");

const { isAuth } = require("../helpers/jwt");

router.get("/", productCTRL.getProducts);
router.get("/:sellerId", productCTRL.getSellersProducts);
router.get("/:productId", productCTRL.getProduct);
router.post("/", productCTRL.createProduct);
router.put("/:productId", productCTRL.updateProduct);
router.delete("/:productId", productCTRL.deleteProduct);

module.exports = router;