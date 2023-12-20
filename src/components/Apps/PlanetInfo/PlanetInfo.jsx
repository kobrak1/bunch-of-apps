import { useState, useEffect } from 'react';
import axios from 'axios';

const PlanetInfo = () => {
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/', {
          headers: {
            'X-RapidAPI-Key': 'a47c302fc8mshd0e1ddd2de5234bp183471jsn35a31c74da0c',
            'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com',
          },
        });
        setPlanetData(response.data);
      } catch (error) {
        console.error('Error fetching planet data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <>
      {planetData ? (
        <div>{planetData[0].description}</div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default PlanetInfo;
