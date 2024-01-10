import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const BmiCalculatorDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [user, setUser] = useState(location.state);

  // get the BASE URL from .env
  const baseUrl = import.meta.env.VITE_BASE_URL;

  // get data when the component mounted
  useEffect(() => {
    const fetchData = async () => {
      if (!user?.id || user.id !== Number(id)) {  
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

          if (response.ok) {
            const result = await response.json();
            setUser(result); 
          } else {
            window.location.href = `${baseUrl}/bmi-calculator/`
            console.error(`Error: ${response.status} - ${response.statusText}`);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };
    fetchData();
  }, [id, user]);

  console.log(user);

  return (
    <div>
      <h2>User Info</h2>
      {user.id ? <p>Email: {user.email}</p> : <p>Loading...</p>}
      <Link to={`/bmi-calculator/${Number(id) + 1}`}>Next User</Link>
      <br />
      <Link to="/bmi-calculator">Back to the user list</Link>
    </div>
  );
};

export default BmiCalculatorDetail;
