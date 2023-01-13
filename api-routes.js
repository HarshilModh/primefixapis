const express = require("express");
const router = express.Router();

const userController = require("./controller/userController");
const movieController = require("./controller/movieController");
const listController = require("./controller/listController");
const songController = require("./controller/songController");
const playlistController = require("./controller/playlistController");
const StudentController = require("./controller/StudentController");
const verify = require("./verifyToken");

// users

// create a user
router.route("/register").post(userController.register);
// checking for a validity of a user
router.route("/login").post(userController.login);
// get all users
router.route("/getusers").get(verify, userController.getUsers);
// get a specific user
router.route("/getUser/:id").get(userController.getUser);
// update a user
router.route("/updateUser/:id").put(verify, userController.updateUser);
// delete a user
router.route("/deleteUser/:id").delete(verify, userController.deleteUser);

// movies

// get all movies
router.route("/getMovies").get(verify, movieController.getMovies);
// get a specific movie
router.route("/getMovie/:id").get(verify, movieController.getMovie);
// create a movie
router.route("/addMovie").post(verify, movieController.addMovie);
// update a movie
router.route("/updateMovie/:id").put(verify, movieController.updateMovie);
// delete a movie
router.route("/deleteMovie/:id").delete(verify, movieController.deleteMovie);
// getting a ranom movie
router.route("/getRandom").get(verify, movieController.getRandom);

// lists

// get lists
router.route("/getLists").get(verify, listController.getLists);
// create a list
router.route("/addList").post(verify, listController.addList);
// delete a lits
router.route("/deleteList/:id").delete(verify, listController.deleteList);

//Add Songs
router.route("/addSong").post( songController.addSong);
//get Songs
router.route("/getSongs").get( songController.getSongs);
//Add Playlist
router.route("/addPlaylist").post(playlistController.addPlayList);
//Add song to playlist
router.route("/addSongToPlaylist/:id").post(playlistController.addSongToPlayList);
//Remove song from playlist
router.route("/removeSongFromPlaylist/:id").post(playlistController.removeSongFromPlayList);

//Student

//Add Student
router.route("/addStudent").post(StudentController.addStudent);
//Log in
router.route("/loginStudent").post(StudentController.loginStudent);


module.exports = router;
