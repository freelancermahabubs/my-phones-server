const express = require("express");
const cors = require("cors");
const phones = require("./phones.json");
const app = express();
const port = 5000;

app.use(cors());
app.get("/", (req, res) => {
  res.send("My Phone information coming soon toon moon");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("I need data For id sss:", id);
  const phone = phones.find((phone) => phone.id === id) || {};
  res.send(phone);
});

app.listen(port, () => {
  console.log(`My Phone ser is running on port: ${port}`);
});
