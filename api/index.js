const countryCodeToFlagEmoji = require("country-code-to-flag-emoji").default;

const {
  APP_ID: appId,
  KEY: key,
  SECRET: secret,
  CLUSTER: cluster,
} = process.env;

module.exports = async (req, res) => {
  const code = req.headers["x-vercel-ip-country"] || "CA";
  try {
    // Set charset in header to stop the emoji from zalgoing
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).end(`${countryCodeToFlagEmoji(code)}`);
  } catch (e) {
    console.log(e.message);
  }
};
