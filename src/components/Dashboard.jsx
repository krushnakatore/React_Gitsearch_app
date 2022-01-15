import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../Redux/dashboard/action";

export const Dashboard = () => {
  let userinfo = useSelector((state) => state.user.user);
  const [us, setUser] = useState("");

  const dispatch = useDispatch();
  // console.log("userinfo", userinfo);

  const getUsers = () => {
    fetch(`https://api.github.com/search/users?q=${us}`)
      .then((res) => res.json())
      .then((res) => {
        // dispatch(getUserSuccess(res.items))

        dispatch(getProfile(res));
      });
  };

  return (
    <div>
      <input
        style={{
          marginTop: "20px",
          padding: "10px",
          borderRadius: "5px",
          border: "none"
        }}
        placeholder="Search profiles"
        type="text"
        onChange={(e) => setUser(e.target.value)}
      />
      <button
        style={{
          marginLeft: "10px",
          marginTop: "20px",
          padding: "10px",
          borderRadius: "5px",
          border: "none"
        }}
        onClick={getUsers}
      >
        Search
      </button>
      <div>
        {userinfo.map((e) => (
          <>
            <div>{e.login}</div>
            <a href={e.html_url}>
              <button>Go to Profile</button>
            </a>
          </>
        ))}

        {/* /<button onclick={goToProfile}>Visit profile</button> */}
      </div>
    </div>
  );
};
