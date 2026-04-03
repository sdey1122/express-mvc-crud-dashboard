const router = require("express").Router();
const controller = require("../controllers/students.controller");

router.post("/", controller.createStudent);
router.put("/:id", controller.updateStudent);
router.patch("/delete/:id", controller.softDelete);
router.patch("/restore/:id", controller.restore);
router.delete("/hard-delete/:id", controller.hardDelete);

module.exports = router;