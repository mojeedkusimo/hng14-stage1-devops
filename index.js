import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

const PORT = 3030;

app.get('/', async (req, res) => {

    try {

        return res.status(200).json({
           message: "API is running"
        });

    } catch (e) {
        return res.status(500).send({ "status": "error", "message": "Could not fetch any name at this time." });
    }
});

app.get('/health', async (req, res) => {

    try {

        return res.status(200).json({
           message: "healthy"
        });

    } catch (e) {
        return res.status(500).send({ "status": "error", "message": "Could not fetch any name at this time." });
    }
});

app.get('/me', async (req, res) => {

    try {

        return res.status(200).json({
            "name": "Mojeed Kusimo",
 	    "email": "mkusimo90@gmail.com",
 	    "github": "https://github.com/mojeedkusimo"
        });

    } catch (e) {
        return res.status(500).send({ "status": "error", "message": "Could not fetch any name at this time." });
    }
});

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});
