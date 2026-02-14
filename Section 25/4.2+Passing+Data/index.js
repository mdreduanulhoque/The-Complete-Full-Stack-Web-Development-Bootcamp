import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let dataa = {};

app.get("/", (req, res) => {
  res.render("index.ejs", { dataa });
});

app.post("/submit", (req, res) => {
  let fl = req.body["fName"];
  let ll = req.body["lName"];
  console.log('Name: ', fl, ll);
  dataa = {fl,ll};
  res.render("index.ejs", { dataa });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
