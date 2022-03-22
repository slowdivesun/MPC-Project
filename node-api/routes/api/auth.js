const User = require("../../models/User");

// @ route  GET api/auth
// @desc    Authenticate User
// @access  Public
router.get("/", auth, async (req, res) => {
  try {
    const author = await User.findById(req.author.id).select("-password");
    res.json(author);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
