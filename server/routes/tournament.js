const express = require("express");
const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const data = req.body;

        console.log("Tournament Registration:", data);

        res.status(200).json({
            success: true,
            message: "Registration Successful"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

module.exports = router;
