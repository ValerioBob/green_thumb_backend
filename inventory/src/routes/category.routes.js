const router = require("express").Router();

const categoryCTRL = require("../controllers/CategoryController");

const { isAuth } = require("../helpers/jwt");

router.get("/", categoryCTRL.getCategories);
router.get("/:categoryId", categoryCTRL.getCategory);
router.post("/", isAuth, categoryCTRL.createCategory);
router.put("/:categoryId", isAuth, categoryCTRL.updateCategory);
router.delete("/:categoryId", isAuth, categoryCTRL.deleteCategory);

module.exports = router;