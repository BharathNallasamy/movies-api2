import express from "express";

const PORT = 3000;
const app = express();

// app.use()

app.get("/",(req, res) => {
  res.json({msg: "Create Method"})
})

// CRUD functionalities of Movies
// R - Reading
app.get('/movies', (req, res) => {
  
})

// C - Create
app.post('/movies', (req, res) => {
  
})

// U - Update
app.put('/movies/:id', (req, res) => {
  
})

// D - Delete
app.delete('/movies/:id', (req, res) => {
  
})

app.listen(PORT, () => {
  console.log(`The Port is Running at: ${PORT}`);
})

// DRY Principle -> Don't Repeat Yourself
// KISS Principle -> Keep it Simple, Stupid!