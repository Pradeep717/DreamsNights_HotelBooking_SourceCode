import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../componets/Loader";
import Error from "../componets/Error";

function Bookingscreen() {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [room, setroom] = useState();

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        console.log("ID:", id);
        console.log("hello in Bookscreen");
        const data = (
          await axios.post("/api/rooms/getroombyid", { roomid: id })
        ).data;
        console.log("Response:", data);
        setroom(data);
        setloading(false);
      } catch (error) {
        console.log(error);
        seterror(true);
        setloading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="m-5">
      {loading ? (
        <Loader />
      ) : room ? (
        <div className="row justify-content-center mt-5 bs">
          <div className="col-md-6">
            <h1>{room.name}</h1>
            <img src={room.imageurls[0]} className="biging" />
          </div>

          <div className="col-md-6">
            <div style={{ float: "left" }}>
              <h1>Booking Details</h1>
              <hr />
              <b>
                <p>Name : </p>
                <p>From Date : </p>
                <p>To Date : </p>
                <p>Max Count : </p>
              </b>
            </div>
            <div style={{ float: "right" }}>
              <h1>Amount</h1>
              <hr />
              <b>
                <p>Tatal days : </p>
                <p>Rent per day : {room.rentperday} </p>
                <p>Tatal ammount : </p>
              </b>
            </div>

            <div style={{ float: "right" }} className="m-5">
              <button className="btn btn-primary">Pay Now</button>
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default Bookingscreen;
