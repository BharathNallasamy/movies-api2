import express from "express";
import movieRoutes from './routes/movies.route.js'
import connectDB from "./lib/db.js";

const PORT = 3000;
const app = express();

// MIDDLE WARE
// Data Understanding middleware
app.use(express.json())
app.use(express.urlencoded({ extended:true }))

// Connect DB
connectDB();

app.get("/",(req, res) => {
  res.json({msg: "Create Method"})
})

app.use('/movies', movieRoutes)

app.listen(PORT, () => {
  console.log(`The Port is Running at: ${PORT}`);
})

// DRY Principle -> Don't Repeat Yourself
// KISS Principle -> Keep it Simple, Stupid!