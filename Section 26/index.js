import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

 
app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/feed", (req, res) => {
    const usernam = req.body.username;
    res.render("feed.ejs", {
        username: usernam,
    });
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

