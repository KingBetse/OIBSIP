const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");
const router = require("./Route/userRoute");
const viewRouter = require("./Route/viewRouter");
const app = express();
dotenv.config({ path: "./config.env" });
app.use(express.json());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    // console.log(con.connections);
    console.log("DB connection succesful");
  });

app.get("/api/v1/test", (req, res) => {
  res.status(200).json({ status: "success", user });
});
app.use(viewRouter);
// app.post("/api/v1/test/signup", (req, res) => {});
app.use(router);
// app.use(global_err);
const port = 3000;
app.listen(port, () => {
  console.log("app is running");
});
