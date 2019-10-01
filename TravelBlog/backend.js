
const express = require('express');
const backend = express();
const multer = require('multer');

let cors = require("cors");

backend.use(cors());
backend.use(express.static('public'));

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});
const upload = multer({ storage });

backend.post('/upload', upload.single('file'), (req, res) => {
    if (req.file)
        res.json({
            imageUrl: `images/${req.file.filename}`
        });
    else
        res.status("409").json("No Files to Upload.");
});

backend.listen(4000, function () {
 console.log("Hey! Backend is running for image upload operation!");
});