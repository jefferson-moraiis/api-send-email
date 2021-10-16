// 3rd parties
const { Router } = require("express");

// Application
const emailController = require("../controllers/email-controller");

const router = Router();

router.post("/send-email", emailController.getData);

module.exports = router;
