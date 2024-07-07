import TamilMovies from "../models/movie.model.js";

export const GetAllMovies = (req, res) => {
  // 
};

export const Get_a_Movies = (req, res) => {
  res.send("Get a Single Movie...");
};

export const CreateMovie = async (req, res) => {
  const newMovie = new TamilMovies({
    title: req.body.title,
    year: req.body.year
  })
  try {
    const movie = await newMovie.save()
    return res.status(201).json(movie)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
};

export const UpdateMovie = (req, res) => {
  res.send("Update a Movie...");
};

export const DeleteMovie = (req, res) => {
  res.send("Delete a Movie...");
};
