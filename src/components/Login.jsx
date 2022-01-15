import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Redirect, Link, Navigate } from "react-router-dom";
import { loginSuccess, loginuserInfo } from "../Redux/login/action";
import { Dashboard } from "./Dashboard";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState([]);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user);

  const handleSubmit = (e) => {
    let payload = { username, password };
    e.preventDefault();
    fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        dispatch(loginSuccess(res));
        // setToken(res.token);
        userInfo(username, res.token);
      });
  };

  const userInfo = (username, token) => {
    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        dispatch(loginuserInfo(res));
        // setToken(res.token);
        setInfo(res);
      });
  };
  console.log(isAuth);
  console.log(info);
  if (isAuth) {
    return (
      <>
        <Navigate to="/dashboard" />
      </>
    );
  }
  return (
    <div>
      <h4>Login Form</h4>
      <form onSubmit={handleSubmit}>
        <input
          style={{
            marginTop: "20px",
            padding: "10px",
            borderRadius: "5px",
            border: "none"
          }}
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          style={{
            marginTop: "20px",
            padding: "10px",
            borderRadius: "5px",
            border: "none"
          }}
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          style={{
            marginTop: "20px",
            padding: "10px",
            borderRadius: "5px",
            border: "none"
          }}
          type="submit"
        />
      </form>
      <div>
        {user.username} {user.email}
      </div>
    </div>
  );
};
