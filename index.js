const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.get("/test", (req, res) => res.send("Hello"));

const cors = require("cors");
const corsMiddleware = cors();
app.use(corsMiddleware);

const bodyParser = require("body-parser");
const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

app.listen(port, () => console.log(`Listen on port ${port}`));

const db = require("./db");
