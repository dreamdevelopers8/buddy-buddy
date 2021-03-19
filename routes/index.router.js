const express = require("express");
const router = express.Router();

// const jwtHelper = require('../config/jwtHelper');
const ctrlUser = require("../controllers/user.controller");

router.post("/store-user", ctrlUser.store_user_answer);
router.post("/store-friends-details/:user_id", ctrlUser.store_friends_details);

module.exports = router;
