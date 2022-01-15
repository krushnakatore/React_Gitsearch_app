import { useSelector } from "react-redux";
import { Link, Routes, Route } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { Login } from "../components/Login";
import { Register } from "../components/Register";

export const Routeall = () => {
  const user = useSelector((state) => state.auth.user);
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <>
      <div
        style={{
          backgroundColor: "#557C55",
          padding: "20px",
          marginLeft: "-10px",
          marginRight: "-10px",
          marginTop: "-10px",
          justifyContent: "space-between"
        }}
      >
        <Link
          style={{
            marginRight: "20px",
            textDecoration: "none"
          }}
          to="/login"
        >
          Login
        </Link>
        <Link
          style={{
            marginRight: "20px",
            textDecoration: "none"
          }}
          to="/register"
        >
          Register
        </Link>
        <Link
          style={{
            marginRight: "20px",
            textDecoration: "none"
          }}
          to="/dashboard"
        >
          Dashboard
        </Link>
        {isAuth ? <span>Hii {user.username}</span> : ""}
      </div>
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>;
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </>
  );
};
