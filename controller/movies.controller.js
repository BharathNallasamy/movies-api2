import TamilMovies from "../models/movie.model.js";

export const GetAllMovies = async (req, res) => {
  try {
    const movies = await TamilMovies.find();
    res.status(200).json(movies)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};

export const Get_a_Movie = async (req, res) => {
  try {
    const requestedMovieId = await TamilMovies.findById(req.params.id);
    
    if(requestedMovieId == null) {
      res.status(404).json({message: "Movie not Found"})
    } else {
      res.status(200).json(requestedMovieId)
    }
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
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

export const UpdateMovie = async (req, res) => {
  try {
    const updateMovie = await TamilMovies.findOneAndUpdate({_id: req.params.id},{
      title: req.body.title,
      year: req.body.year
    }, { new: true }
  )
    res.status(200).json(updateMovie)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};

export const DeleteMovie = async (req, res) => {
  try {
    const deleteMovie = await TamilMovies.findByIdAndDelete({ _id: req.params.id})
    res.send("Deleted a Movie...");
  } catch (error) {
    res.status(500).json({error: error.message})
  }
};
