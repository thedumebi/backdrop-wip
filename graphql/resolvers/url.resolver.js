const Url = require("../../models/url");
const generateUrl = require("../../utils/generateUrl");

const shortenURL = async ({ url }, req) => {
  try {
    const urlExists = await Url.findOne({ url });
    if (!urlExists) {
      try {
        const randomString = await generateUrl(url);
        const newUrl = await Url.create({
          randomString,
          url,
        });
        if (newUrl) {
          return `${req.protocol}://${req.get("host")}/${newUrl.randomString}`;
        }
      } catch (err) {
        throw err;
      }
    } else {
      throw new Error(
        `Sorry, url has already been shortened. Your link is ${
          req.protocol
        }://${req.get("host")}/${urlExists.randomString}`
      );
    }
  } catch (err) {
    throw err;
  }
};

module.exports = {
  shortenURL,
};
