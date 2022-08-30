const router = require("express").Router();

const orderCTRL = require("../controllers/OrderController");

const { isAuth } = require("../helpers/jwt");

router.get("/:orderId", orderCTRL.getOrder);
router.get("/user/:userId", orderCTRL.getUserOrders);
router.post("/:userId", orderCTRL.addOrder);
router.put("/:orderId", orderCTRL.updateOrder);

// router.get("/", categoryCTRL.getCategories);
// router.get("/:categoryId", categoryCTRL.getCategory);
// router.post("/", isAuth, categoryCTRL.createCategory);
// router.put("/:categoryId", isAuth, categoryCTRL.updateCategory);
// router.delete("/:categoryId", isAuth, categoryCTRL.deleteCategory);

module.exports = router;