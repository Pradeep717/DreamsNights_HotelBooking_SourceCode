const express = require("express");
const router = express.Router();
const Room = require("../models/room");

router.get("/", (req, res, next) => {
  res.status(200).json({
    messege: "Get request in Room",
  });
});

// Define a route for getting all rooms
router.get("/getallrooms", async (req, res) => {
  try {
    // Attempt to fetch all rooms from the database
    const rooms = await Room.find({});
    // If successful, return the array of rooms to the client
    res.send(rooms); // Alternatively, you can use res.json({rooms}) to send the response
  } catch (error) {
    console.log(error);
    // If an error occurs, return a 400 Bad Request response with an error message
    return res.status(400).json({
      message: error, // This will return the error object's message property as the error message
      // Alternatively, you can provide a custom error message like this:
      // message: "Error fetching rooms from the database"
    });
  }
});

router.post("/getroombyid", async (req, res) => {
  const roomid = req.body.roomid;
  console.log(roomid);
  try {
    const room = await Room.findOne({ _id: roomid });
    res.send(room); // Alternatively, you can use res.json({rooms}) to send the response
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error, // This will return the error object's message property as the error message
    });
  }
});

router.post("/addroom", async (req, res) => {
  try {
    const newroom = new Room(req.body);
    await newroom.save();
    res.send("New room added successfully");
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
