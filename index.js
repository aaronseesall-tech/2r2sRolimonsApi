import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Rolimons API is running!");
});

app.get("/userinfo/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const response = await fetch(`https://www.rolimons.com/playerapi/player/${id}`);
        const data = await response.json();

        res.json(data);
    } catch (err) {
        res.json({ error: "Failed to fetch Rolimons data" });
    }
});

app.listen(PORT, () => console.log("API online on port " + PORT));
