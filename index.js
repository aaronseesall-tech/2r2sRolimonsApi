const express = require("express");
const axios = require("axios");
const app = express();

app.get("/player/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const response = await axios.get(`https://users.roblox.com/v1/users/${id}`);

        res.json({
            username: response.data.name,
            displayName: response.data.displayName,
            created: response.data.created,
            description: response.data.description
        });

    } catch (err) {
        res.status(500).json({ error: "Failed to fetch user" });
    }
});

// Render needs this
app.get("/", (req, res) => {
    res.send("API is running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
