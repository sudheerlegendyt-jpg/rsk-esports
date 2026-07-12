const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "xnx7yfbi",
    api_key: "792946512442473",
    api_secret: "YOUR_API_SECRET"
});

module.exports = cloudinary;
