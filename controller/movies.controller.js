export const GetAllMovies = (req, res) => {
  //  
};

export const Get_a_Movies = (req, res) => {
  res.send("Get a Single Movie...");
};

export const CreateMovie = (req, res) => {
//   res.send("Create a Movie...");
  console.log(req.body)
  return res.json(req.body)
};

export const UpdateMovie = (req, res) => {
  res.send("Update a Movie...");
};

export const DeleteMovie = (req, res) => {
  res.send("Delete a Movie...");
};
