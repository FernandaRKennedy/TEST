import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Matches() {
  const navigate = useNavigate();
  const [matches, setMatches] = useState(undefined);

  const { id } = useParams();
  const URL = `${process.env.REACT_APP_BACKEND_URI}/matches/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setMatches(data);
    };
    fetchData();
  }, [id, URL]);

  //deletes the current match from database
  const handleDelete = async (e) => {
    const response = await fetch(URL, {
      method: "delete",
    });
    if (response.status !== 204) console.log("error");
    navigate("/");
  };

  const display = matches && (
    <body>
      <img
        src="https://cdn.wallpapersafari.com/93/97/Uv8wKu.jpg"
        className="explore-background"
        alt="pastel background"
      />
      <div style={{ margin: "auto" }}>
        <h1>{matches.userName}</h1>
        <img src={matches.profilePicture} alt="profile pic" />
        <p>{matches.emailAddress}</p>
        <div>
          <h4>
            {matches.firstName} {matches.lastName}
          </h4>
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </body>
  );

  return <div>{display}</div>;
}

export default Matches;
