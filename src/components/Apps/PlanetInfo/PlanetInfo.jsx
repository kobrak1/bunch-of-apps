import { useEffect, useState } from "react";
import axios from "axios";
import "./PlanetInfo.scss";

const PlanetInfo = () => {
  const [planetName, setPlanetName] = useState("Earth");
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/",
          {
            headers: {
              "X-RapidAPI-Key":
                "a47c302fc8mshd0e1ddd2de5234bp183471jsn35a31c74da0c",
              "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
            },
          }
        );
        setPlanetData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  console.log(planetData);
  console.log(typeof planetData);

  // handle input
  const handleInput = (e) => {
    const input = e.target.value.toLowerCase();
    setPlanetName(input.charAt(0).toUpperCase() + input.slice(1));
  };

  return (
    <div>
      <input type="text" value={planetName} onChange={handleInput} />
      {planetData && (
        <div className="show-data">
          {planetData.map((data, index) => (
            <div key={index}>
              {data.name === planetName && (
                <>
                  <p>{data.description}</p>
                  <div>
                    <img
                      src={data.imgSrc.img}
                      alt={`image of ${planetName}`}
                      style={{ width: "10%" }}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlanetInfo;
