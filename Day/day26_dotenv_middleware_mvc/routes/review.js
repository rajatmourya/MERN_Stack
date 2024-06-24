const { getDataController, addDataController } = require("../controllers/review");

const router = require("express").Router();

router.post('/add', addDataController);

router.get("/getAll/:productId", getDataController)

module.exports = router;