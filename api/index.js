const {
  APP_ID: appId,
  KEY: key,
  SECRET: secret,
  CLUSTER: cluster,
} = process.env;

module.exports = async (req, res) => {
  const code = req.headers["x-vercel-ip-country"];
  console.log(req.geo);
  try {
    res.status(200).end(code);
  } catch (e) {
    console.log(e.message);
  }
};
