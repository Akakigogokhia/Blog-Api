const router = require("express").Router();
const categoryRouter = require("./CategoryRouter");
const userRouter = require("./UserRouter");

router.use("/category", categoryRouter);
router.use("/user", userRouter);
router.use("/createPost", createPost);
module.exports = router;
