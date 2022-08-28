const express = require("express");
const path = require("path");
const multer = require("multer");

const app = express();

const storage = multer.diskStorage({
    destination: "./uploads",
    filename:(req,file,calback)=>{
        calback(null,file.originalname);
    },
});

const upload = multer({storage});

app.use(express.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, "activity2.html"));
});

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname, "login.html"));
});

app.post("/login",upload.single("avatar"), (req,res)=>{
    console.log(req.file);
    res.send("message");
});

const port = 3000;
app.listen(port, () => {
    console.log(
        `Server started ${port} visit: http://localhost:${port}`
    );
});

