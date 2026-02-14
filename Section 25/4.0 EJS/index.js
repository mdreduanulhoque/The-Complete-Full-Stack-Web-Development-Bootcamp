import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    let type = "";
    let message = "";

    if(day === 5){
        type = "Weekend";
        message = "Friday !! Chill";
    }else{
        type = "Workday";
        message = "Oh, sh*t. Here we go again";
    }

    res.render("index.ejs", {
        dayType: type,
        dayMessage: message
    });

});


app.listen(3000, () => {
    console.log("Running on 3000");
})