const express = require("express");
const app = express();
const mongoose = require("mongoose");
const roomsRoute = require("./api/routes/roomsRoute");
const usersRoute = require("./api/routes/usersRoot");
app.use(express.json());

mongoose.connect(
  "mongodb+srv://pradeepsuk717:yKKLg2jTUbccxSWn@dreamnights.kuownle.mongodb.net/DreamNights_HotelBooking",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

module.exports = app;
