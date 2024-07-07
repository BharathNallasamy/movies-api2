import { Schema, model } from "mongoose";

// Writing a Schema
const schema = new Schema({
  title: String,
  year: Number
})

// Creating a Model
const TamilMovies = model("tamilmovie", schema)

export default TamilMovies