import express from "express";

const PORT = 3000;
const app = express();

// app.use()

app.get("/",(req, res) => {
  res.json({msg: "Create Method"})
})

app.listen(PORT, () => {
  console.log(`The Port is Running at: ${PORT}`);
})

// DRY Principle -> Don't Repeat Yourself
// KISS Principle -> Keep it Simple, Stupid!