import React, { useState } from "react";
import Users from "./Users";
import "./UserList.scss";
import UserInfo from "./UserInfo";

const UserList = () => {
  const [userId, setUserId] = useState(null);

  return (
    <>
      <div className="user-list">
        <div className="left">
          <h2>Users</h2>
          <Users setUserId={setUserId} />
        </div>
        <div className="right">
          <h2>User Info</h2>
          {userId && <UserInfo userId={userId} />}
        </div>
      </div>
      <div className="info" style={{marginTop:"1rem"}}>
        Note: This app makes an API call to "https://jsonplaceholder.typicode.com/users/" to get the info of clicked user.
        <h3>User ID: {userId}</h3>
      </div>
    </>
  );
};

export default UserList;
