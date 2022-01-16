require("dotenv").config();

const key = require("./key.json");
const express = require("express");
const { GoogleSpreadsheet } = require("google-spreadsheet");

const app = express();
app.use(express.json());

const workbook = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

app.get("/", async (req, res) => {
    try {
        await workbook.useServiceAccountAuth({
            client_email: key.client_email,
            private_key: key.private_key,
        });

        await workbook.loadInfo();

        const worksheet = workbook.sheetsByIndex[0];
        await worksheet.addRows([
            {
                Name: req.body.name,
                Email: req.body.email,
                Phone: req.body.phone,
                City: req.body.city,
                Experience: req.body.experience,
            },
        ]);

        res.json({
            message: "Application submitted successfully.",
        });
    } catch (_) {
        res.status(500).json({
            message: "The form could not be submitted. Please try again later.",
        });
    }
});

app.listen(80);
