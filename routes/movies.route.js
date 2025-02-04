import express from "express"
import { 
  CreateMovie, 
  DeleteMovie, 
  GetAllMovies, 
  UpdateMovie, 
  Get_a_Movie 
} from "../controller/movies.controller.js"

const router = express.Router()

// CRUD functionalities of Movies
// R - Reading
router.get('/', GetAllMovies)

// Get a Single movie
router.get('/:id', Get_a_Movie)

// C - Create
router.post('/', CreateMovie)

// U - Update
router.put('/:id', UpdateMovie)

// D - Delete
router.delete('/:id', DeleteMovie)

export default router