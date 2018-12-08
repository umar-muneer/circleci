const express = require("express");
const app = new express();

app.get("/service1", (req, res) => res.json("OK"));

app.listen(3000, () => console.log("server listening on 3000"));