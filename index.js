const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Please hit correct API endpoint.");
});
app.get("/surah", (req, res) => {
    res.send(require("./Data/surah.json"));
});
app.get("/1", (req, res) => {
    res.send(require("./Data/s1.json"));
});
app.get("/2", (req, res) => {
    res.send(require("./Data/s2.json"));
});
app.get("/3", (req, res) => {
    res.send(require("./Data/s3.json"));
});
app.get("/4", (req, res) => {
    res.send(require("./Data/s4.json"));
});
app.get("/5", (req, res) => {
    res.send(require("./Data/s5.json"));
});
app.get("/6", (req, res) => {
    res.send(require("./Data/s6.json"));
});
app.get("/7", (req, res) => {
    res.send(require("./Data/s7.json"));
});
app.get("/8", (req, res) => {
    res.send(require("./Data/s8.json"));
});
app.get("/9", (req, res) => {
    res.send(require("./Data/s9.json"));
});
app.get("/10", (req, res) => {
    res.send(require("./Data/s10.json"));
});
app.get("/11", (req, res) => {
    res.send(require("./Data/s11.json"));
});
app.get("/12", (req, res) => {
    res.send(require("./Data/s12.json"));
});
app.get("/13", (req, res) => {
    res.send(require("./Data/s13.json"));
});
app.get("/14", (req, res) => {
    res.send(require("./Data/s14.json"));
});
app.get("/15", (req, res) => {
    res.send(require("./Data/s15.json"));
});
app.get("/16", (req, res) => {
    res.send(require("./Data/s16.json"));
});
app.get("/17", (req, res) => {
    res.send(require("./Data/s17.json"));
});
app.get("/18", (req, res) => {
    res.send(require("./Data/s18.json"));
});
app.get("/19", (req, res) => {
    res.send(require("./Data/s19.json"));
});
app.get("/20", (req, res) => {
    res.send(require("./Data/s20.json"));
});

app.post("/surahnew", (req, res) => {
    res.send(req.body);
});


app.listen(port, () => {
    console.log('Server is running succesfully!');
});