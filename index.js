import express from "express";
const app = express();
const PORT = 4000;

app.listen(PORT, (req, res) => {
  console.log(`API Listening on PORT: ${PORT}`);
});

app.get("/", (req, res) => {
  return res.send("Hello Express");
});

app.get("/vercel", (req, res) => {
  return res.send("Welcome Vercel");
});

module.express = app;
