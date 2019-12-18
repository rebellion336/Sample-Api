const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 8090;

app.use(cors());

app.get("/api", (req, res) => {
  res.status(200).send("Hello from API");
});

app.get("/json", (req, res) => {
  const users = [
    {
      id: 1,
      username: "goldroger",
      name: "Gol D. Roger",
      position: "Pirate King"
    },
    {
      id: 2,
      username: "mrzero",
      name: "Sir Crocodile",
      position: "Former-Shichibukai"
    },
    {
      id: 3,
      username: "luffy",
      name: "Monkey D. Luffy",
      position: "Captain"
    },
    {
      id: 4,
      username: "kuzan",
      name: "Aokiji",
      position: "Former Marine Admiral"
    },
    {
      id: 5,
      username: "shanks",
      name: "'Red-Haired' Shanks",
      position: "The 4 Emperors"
    }
  ];
  res.status(200).json(users);
});

app.post("/post", (req, res) => {
  const body = req.body;
  res.status(200).json(body);
});

app.listen(port, () => {
  console.log("Start server at port 8090.");
});
