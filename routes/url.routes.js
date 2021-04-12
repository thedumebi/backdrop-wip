const express = require("express");
const { redirectUrl } = require("../controllers/url.controller");

const router = express.Router();

router.get("/:randomString", redirectUrl);
module.exports = router;
