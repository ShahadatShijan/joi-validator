const express = require("express");
const router  = express.Router();
const Joi = require("joi");
const { createUser, loginUser } = require("../controllers/user.controller");
const { runValidation } = require("../validation/run.validation");
const { registerValidation, loginValidation } = require("../validation/user.validation");


//create user
router.post("/register", runValidation(registerValidation),createUser)

//login user
router.post("/login", runValidation(loginValidation),loginUser)

        

module.exports = router;