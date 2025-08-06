// authentication.js → module.exports = { ensureAuthentication }

const { ensureAuthentication } = require("../Middleware/authentication.js");

const router = require("express").Router();

router.get("/", ensureAuthentication, (req, res) => {
  console.log("this is the user", req.user);
  res.status(200).json([
    { name: "mobile", price: 100 },
    { name: "laptop", price: 1000 },
    { name: "bicycle", price: 2000 }
  ]);
});

module.exports = router;
