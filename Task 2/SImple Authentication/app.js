const express = require("express");
const fs = require("fs");
const router = require("./Route/userRoute");
const app = express();
app.use(express.json());

app.get("/api/v1/test", (req, res) => {
  res.status(200).json({ status: "success", user });
});
// app.post("/api/v1/test/signup", (req, res) => {});
app.use(router);

const port = 3000;
app.listen(port, () => {
  console.log("app is running");
});
