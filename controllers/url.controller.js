const Url = require("../models/url");
const asyncHandler = require("express-async-handler");

// @desc Check url randomString and redirect
// @route GET /:randomString/
// @access Public
const redirectUrl = asyncHandler(async (req, res) => {
  const randomString = req.params.randomString;
  const urlExists = await Url.findOne({ randomString });
  if (urlExists) {
    res.redirect(urlExists.url);
  } else {
    res.status(404);
    throw new Error("URL not found");
  }
});

module.exports = {
  redirectUrl,
};
