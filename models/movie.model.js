import { Schema, model } from "mongoose";

// Writing a Schema
const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: Number,
    required: true,
  }
})

// Creating a Model
const TamilMovies = model("tamilmovie", schema)

export default TamilMovies