const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Init middleware
app.use(express.json());

app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/user", require("./routes/api/user"));
app.use("/api/entry", require("./routes/api/entry"));

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));