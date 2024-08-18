

const express = require("express");
const router = express.Router();
const TechStack = require("../../models/techStack/techStack");
const multer = require("multer");
const path = require("path");
const app = express();
// app.use(express.static('../../public'));

app.use('/public', express.static(path.join(__dirname, 'public')));

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../../../../client/portfolio/public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({
    storage: storage,
    limits: {
        fileSize: 5000000
    }
});

let uploadHandler = upload.single('tech_image');

// GET all tech stack data
router.get("/mytech", async (req, res) => {
    try {
        const techData = await TechStack.find();
        res.json(techData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// POST new tech stack data with file upload
router.post("/mytech", (req, res) => {
    uploadHandler(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            if (err.code == 'LIMIT_FILE_SIZE') {
                return res.status(400).json({ message: "File size limit exceeded" });
            }
            return res.status(500).json({ message: "Multer error occurred" });
        } else if (err) {
            return res.status(500).json({ message: "Unknown error occurred" });
        }

        const techName = req.body.tech_name;
        const techImage = req.file ? req.file.path : '';

        try {
            const data = await TechStack.create({
                tech_image: techImage,
                tech_name: techName,
            });
            res.status(200).json({
                message: "Image and tech name uploaded successfully!",
                data,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server Error" });
        }
    });
});

module.exports = router;
