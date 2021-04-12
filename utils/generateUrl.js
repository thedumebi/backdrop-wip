const Url = require("../models/url");

const isUrl = (string) => {
  let url;

  try {
    url = new URL(string);
  } catch (err) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
};

const getRandom = async () => {
  let randomString;
  let valid = false;

  while (!valid) {
    randomString =
      Math.random().toString(32).substring(2, 5) +
      Math.random().toString(32).substring(2, 5);

    const randomStringExists = await Url.findOne({ randomString });
    if (!randomStringExists) {
      valid = true;
    }
  }

  return randomString;
};

const generateUrl = async (url) => {
  try {
    const isValidUrl = isUrl(url);
    if (isValidUrl) {
      return getRandom();
    } else {
      throw new Error("Invalid URL parameter");
    }
  } catch (err) {
    throw err;
  }
};

module.exports = generateUrl;
