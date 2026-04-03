const router = require("express").Router();
const controller = require("../controllers/views.ejs.controller");

router.get("/", controller.listPage);
router.get("/add", controller.addPage);
router.get("/edit/:id", controller.editPage);
router.get("/restore", controller.restorePage);

module.exports = router;