const express = require("express");
const app = new express();

app.get("/service2", (req, res) => res.json("OK"));

app.listen(3001, () => console.log("server listening on 3000"));