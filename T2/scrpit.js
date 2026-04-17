const express = require("express");
const app = express();
// app.use(express.static(__dirname))
app.use(express.static('T2/frontend'))
app.listen(5200);

