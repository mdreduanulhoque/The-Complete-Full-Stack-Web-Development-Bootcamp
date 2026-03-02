// unfinished project

import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

// Use a Pool for better connection management
const db = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "********",
  port: 5432,
});

let quiz = [];

// Load data BEFORE starting the server logic
async function loadQuizData() {
  try {
    const res = await db.query("SELECT * FROM flags");
    quiz = res.rows;
    console.log("Database loaded successfully.");
  } catch (err) {
    console.error("Error loading quiz data:", err.stack);
  }
}

let totalCorrect = 0;
let currentQuestion = {};

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Helper function
function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
}

// GET home page
app.get("/", async (req, res) => {
  totalCorrect = 0;
  nextQuestion();
  res.render("index.ejs", { question: currentQuestion });
});

// POST answer
app.post("/submit", async (req, res) => {
  let answer = req.body.answer.trim().toLowerCase();
  let isCorrect = false;

  // 1. Compare to the CURRENT question before changing it
  if (currentQuestion.name === answer) {
    totalCorrect++;
    isCorrect = true;
    nextQuestion(); // Only get a new question if they were right
    
    res.render("index.ejs", {
      question: currentQuestion,
      wasCorrect: isCorrect,
      totalScore: totalCorrect,
    });
  } else {
    // 2. WRONG ANSWER: Send the final score first
    res.render("index.ejs", {
      question: currentQuestion,
      wasCorrect: false,
      totalScore: totalCorrect, // This will now show their actual last score
    });

    // 3. Reset the score for the NEXT game session
    totalCorrect = 0; 
  }
});

// Start the server only after attempting to fetch data
loadQuizData().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});