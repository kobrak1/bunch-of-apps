import React, { useEffect, useState } from "react";
import "./LoadingAnimation.scss";

const UserInfo = ({ userId }) => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  // when component mounted
  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((data) => data.json())
      .then((user) => setUserInfo(user))
      .catch((error) => console.error("Error:", error))
      .finally(() => setLoading(false));
  }, [userId]);

  // formatted address
  const formattedAddress = (data) => {
    const addressObject = data.address
    const plainAddress = `${addressObject.street} st, ${addressObject.suite}, ${addressObject.city}, ${addressObject.zipcode}`
    return plainAddress
  }

  return (
    <div className="user-info">
      { loading 
      ? <svg className="spinner" viewBox="0 0 50 50">
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
          ></circle>
        </svg>
      : <div className="information">
          <li><b>Name:</b> {userInfo.name} </li>
          <li><b>Username:</b> {userInfo.username} </li>
          <li><b>Email:</b> {userInfo.email} </li>
          <li><b>Phone:</b> {userInfo.phone} </li>
          <li><b>Address:</b> {formattedAddress(userInfo)} </li>
        </div> }
    </div>
  );
};

export default UserInfo;
