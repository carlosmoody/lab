const express = require("express");
const { userRouteTest } = require("../controllers/users");
const middlewareTest = require("../middleware/middlewareTest");
const router = express.Router();

router.post("/", middlewareTest, userRouteTest);

module.exports = router;