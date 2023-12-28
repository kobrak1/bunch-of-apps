import { useState } from "react";
import "./QuoteGenerator.scss";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState([]);

  // Function to make API call
  const fetchData = async () => {
    const url = 'https://random-quote-generator2.p.rapidapi.com/randomQuote';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a47c302fc8mshd0e1ddd2de5234bp183471jsn35a31c74da0c',
        'X-RapidAPI-Host': 'random-quote-generator2.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setQuote(result); // Assuming the API response is an object and you want to store it in an array
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log(typeof quote);

  return (
    <div className="quote-generator">
        <button onClick={fetchData}>Generate Quote</button>
      {quote.length > 0 && (
        quote.map((data, index) => (
          <p key={index}>{data.Quote} <br /> - {data.Author}</p>
        ))
      )}
    </div>
  );
};

export default QuoteGenerator;
