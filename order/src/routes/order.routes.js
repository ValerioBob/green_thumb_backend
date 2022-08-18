const router = require("express").Router();

const orderCTRL = require("../controllers/OrderController");

const { isAuth } = require("../helpers/jwt");

router.get("/:orderId", orderCTRL.getOrder);
router.post("/:userId/:productId", isAuth, orderCTRL.addOrder);
router.put("/:orderId", isAuth, orderCTRL.updateOrder);

// router.get("/", categoryCTRL.getCategories);
// router.get("/:categoryId", categoryCTRL.getCategory);
// router.post("/", isAuth, categoryCTRL.createCategory);
// router.put("/:categoryId", isAuth, categoryCTRL.updateCategory);
// router.delete("/:categoryId", isAuth, categoryCTRL.deleteCategory);

module.exports = router;