const express = require("express");

const app = express();

app.get("/api/info", (req, res) => {
    res.json({
        code: 0
    })
})

app.listen("8088", function() {
    console.log("server start!!!");
})