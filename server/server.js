require("dotenv").config();
const adminRoutes = require("./routes/admin");
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const tournamentRoutes = require("./routes/tournament");
const playerRoutes = require("./routes/player");
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/tournament", tournamentRoutes);
app.use("/api/player", playerRoutes);
app.use("/api/admin", adminRoutes);
app.use(express.static(path.join(__dirname, "../client")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"));
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});
