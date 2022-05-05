const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Entry = require("../../models/Entry");
const User = require("../../models/User");
const { check, validationResult } = require("express-validator");
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { default: axios } = require("axios");

router.post("/:id", async (req, res) => {
  const entryText = req.body.text;
  const user = await User.findById(req.params.id).select("-password");
  // what if user is not present

  // if user is present in database
  try {
    const newEntry = new Entry({ user: user, text: entryText });
    const savedEntry = await newEntry.save();

    // await axios.post("http://localhost:5000/emotion/" + savedEntry._id, {
    //   text: entryText,
    // });

    res.status(200).send(savedEntry);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const entries = await Entry.find({
      user: req.params.id,
    });

    res.json(entries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
