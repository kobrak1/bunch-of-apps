import { useState } from "react";

const GithubuserSearch = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");

  const baseUrl = `https://api.github.com/users/${userName}`;

  // function to handle the input change
  const handleInput = (e) => {
    setUserName(e.target.value);
  };

  // function to listen the Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // function to handle search
  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent the form from submitting and reloading the page

    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const userData = await response.json();
      setUser(userData);
      setUserName("")
      setError("")
    } catch (error) {
      console.error("Eror:", error);
      setUser([]);
      setError(`${error}`)
    }
  };

  const Form = ({ onSubmit, value, onChange, onKeyDown }) => {
    return (
      <form onSubmit={onSubmit}>
        <div>
          <input
            autoFocus="autoFocus"
            type="text"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder="Enter GitHub username"
            required
          />
          <button type="submit" style={{backgroundColor:"#f8c9a5"}}>Search</button>
        </div>
      </form>
    );
  };
  console.log(userName);
  console.log(user);
  return (
    <div className="githubUserSearch">
      <h1>Github User Avatar Search</h1>
      <Form
        onSubmit={handleSearch}
        value={userName}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      {user && (
        <div>
            <img src={user.avatar_url} />
        </div>
      )}
      {error && <p style={{color:"red"}}>{error}</p> }
    </div>
  );
};

export default GithubuserSearch;
