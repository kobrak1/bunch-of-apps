import { useEffect, useState } from "react";
import "./BmiCalculator.scss";

const BmiCalculator = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  // call the API when the component mounted
  useEffect(() => {
    getData();
  }, []);

  // get data
  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsersData(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
    return;
  };

  return (
    <div>
      <h2>Users</h2>
      {loading && <div>Loading...</div>}
      {usersData && usersData.map((data) => <li key={data.id}>{data.name}</li>)}
    </div>
  );
};

export default BmiCalculator;
