import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Hello, from home page</h1>");
});

app.get('/contact', (req, res) => {
    res.send("<h1>Hello, from contact page</h1>");
});

app.get('/about', (req, res) => {
    res.send("<h1>Hello, from about page</h1>");
});

app.listen(port, () => {
    console.log("we are live !!");
})