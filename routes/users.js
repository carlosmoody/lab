const express = require("express");
const { createUser, getAllUsers } = require("../controllers/users");
const middlewareTest = require("../middleware/middlewareTest");
const router = express.Router();

router.post("/", createUser);
router.get("/", middlewareTest, getAllUsers);

module.exports = router;