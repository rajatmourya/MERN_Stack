const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    id: 23443,
    title: "hello",
    imgUrl: "ueuufhiuehfuiweiuheiuhiuwf",
  });
});

router.get("/all", (req, res) => {
  res.json({
    "data": [
      {
        title: "hello",
      },
      {
        title: "hi",
      },
    ],
  });
});

module.exports = router;
