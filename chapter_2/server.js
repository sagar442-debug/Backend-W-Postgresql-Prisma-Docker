const express = require("express");
const app = express();
const PORT = 8383;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("This is the server", req.method);
  res.sendStatus(200);
});

app.get("/dashboard", (req, res) => {
  console.log("Dashboard endpoint");
  res.send("hi");
});

app.post("/api/data", (req, res) => {
  const newEntry = req.body;
  console.log(newEntry);
  res.sendStatus(201);
});

app.listen(PORT, () => {
  console.log(`Server has started on ${PORT}`);
});
