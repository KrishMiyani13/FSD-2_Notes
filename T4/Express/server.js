const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/reactconnect")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error(" Connection error:", err));

// Schema with 3 fields
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const User = mongoose.model("User", UserSchema);

// Signup route
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.send("User registered successfully");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5000, () => console.log(" Server running on port 5000"));
