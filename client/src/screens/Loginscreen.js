import React, { useState, useEffect } from "react";
import Loader from "../componets/Loader";
import Error from "../componets/Error";
import axios from "axios";

function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();

  async function Login() {
    const user = {
      email,
      password,
    };
    try {
      setloading(true);
      console.log(user);
      const result = await axios.post("/api/users/login", user);
      setloading(false);

      localStorage.setItem("currentUser", JSON.stringify(result));
      window.location.href = "/home";
    } catch (error) {
      console.log(error);
      setloading(false);
      seterror(true);
    }
  }

  return (
    <div className="container">
      {loading && <Loader />}
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          {error && <Error message="Invalid Credentials" />}

          <div className="bs rounded">
            <div className="bg-primary text-white p-2 rounded-top">
              <h2>Login</h2>
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />

              <input
                type="text"
                className="form-control"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />

              <div className="col">
                <button className="btn btn-primary mt-3" onClick={Login}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
