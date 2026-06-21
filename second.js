const express = require("express");
const fs = require("fs");
const path = require("path");

const dataFile = path.join(__dirname, "MOCK_DATA (1).json");
const users = require(dataFile);
const app = express();

app.use(express.json());

app.post("/api/users", (req, res) => {
    const body = req.body;

    users.push({
        ...body,
        id: users.length + 1
    });
    fs.writeFile(dataFile, JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({
                status: "error",
                message: "File write failed"
            });
        }

        return res.status(201).json({
            status: "success",
            id: users.length
        });
    });
});
app.listen(8000, () => {
    console.log("Server started at port 8000");
});