const express = require("express");
const router = express.Router();

router.use(express.static("public"));

const museumRoutes = require("./routes/museumRoutes");

router.get("/", (req, res) => {
    res.render("pages/home", {
        title: "Home"
    });
});

router.get("/aboutus", (req, res) => {
    res.render("pages/aboutus", {
        title: "About Us"
    });
});

router.get("/virtualtour", (req, res) => {
    res.render("pages/virtualtour", {
        title: "Virtual Tour"
    });
});

router.get("/educators", (req, res) => {
    res.render("pages/educators", {
        title: "Educators"
    });
});

router.get("/contact", (req, res) => {
    res.render("pages/contact", {
        title: "Contact"
    });
});

router.get("/zone1", (req, res) => {
    res.render("pages/zone1", {
        title: "Zone 1"
    });
});

router.get("/zone2", (req, res) => {
    res.render("pages/zone2", {
        title: "Zone 2"
    });
});

router.get("/zone3", (req, res) => {
    res.render("pages/zone3", {
        title: "Zone 3"
    });
});

router.get("/zone4", (req, res) => {
    res.render("pages/zone4", {
        title: "Zone 4"
    });
});

router.get("/zone5", (req, res) => {
    res.render("pages/zone5", {
        title: "Zone 5"
    });
});

router.get("/zone6", (req, res) => {
    res.render("pages/zone6", {
        title: "Zone 6"
    });
});

router.get("*", (req, res) => {
    if(req.url == "/favicon.ico/") {
        res.end(); 
    } else {
        res.send("<h1>404 ERROR THIS PAGE DOES NOT EXIST</h1>");
    }
});

module.exports = router;
