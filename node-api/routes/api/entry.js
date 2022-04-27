const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Entry = require("../../models/Entry");
const User = require("../../models/User");
const { check, validationResult } = require("express-validator");
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/entry", auth, async (req, res) => {
  const entryText = req.body.text;
  const user = User.findById(req.user.id);
  const id = user.id;

  // what if user is not present

  // if user is present in database
  try {
    const newEntry = new Entry({ id, entryText });
    await newEntry.save();

    res.status(200).send("Successfully Saved");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
