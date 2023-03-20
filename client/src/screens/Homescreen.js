import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../componets/Room";
import Loader from "../componets/Loader";
import "antd/dist/reset.css";
import Error from "../componets/Error";
import moment from "moment";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

function Homescreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [fromdate, setfromdate] = useState();
  const [todate, settodate] = useState();

  useEffect(() => {
    async function fetchRooms() {
      try {
        console.log("hello in Homescreen");
        const { data } = await axios.get("/api/rooms/getallrooms");
        setRooms(data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    }
    fetchRooms();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  function filterByDate(dates) {
    setfromdate(dates[0].format("DD-MM-YYYY"));
    settodate(dates[1].format("DD-MM-YYYY"));
  }

  return (
    <div className="m-5">
      <div className="row mt-5 bs">
        <div className="col-md-3">
          <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
        </div>
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="search room"
          />
        </div>

        <div className="col-md-3">
          <select className="form-control">
            <option value="all">All</option>
            <option value="delux">Delux</option>
            <option value="non-delux">Non-Delux</option>
          </select>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loader />
        ) : rooms.length > 1 ? (
          rooms.map((room) => {
            return (
              <div className="col-md-9 mt-2" key={room._id}>
                <Room room={room} />
              </div>
            );
          })
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
}

export default Homescreen;
