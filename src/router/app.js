const express = require("express");
require("../db/conn");
const MensRanking = require("../models/mens");
const router = require("../router/men")

const app = express();
const port = process.env.PORT || 4000;
 
app.use(express.json());
app.use(router);

app.get("/", async(req, res) => {
    res.send("hello");
})

//we will handle the post request



app.listen(port, () => {
    console.log(`console is live at portno. ${port} `);
})