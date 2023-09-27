import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

<h1> hello </h1>;
const Profile = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState(undefined);

  const { id } = useParams();
  const URL = `${process.env.REACT_APP_BACKEND_URI}/Account`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setAccount(data);
    };
    fetchData();
  }, [id, URL]);

  //deletes the current profile from database
  const handleDelete = async (e) => {
    const response = await fetch(URL, {
      method: "delete",
    });
    if (response.status !== 204) console.log("error");
    navigate("/");
  };
  console.log("wtf");
  const display = account && (
    <body>
      <div>
        <img
          src="https://cdn.wallpapersafari.com/93/97/Uv8wKu.jpg"
          className="explore-background"
          alt="pastel background"
        />
      </div>
      <div style={{ margin: "auto" }}>
        <h1>{account.userName}</h1>
        <img src={account.profilePicture} alt="profile pic" />
        <p>{account.emailAddress}</p>
        <div>
          <h4>
            {account.firstName} {account.lastName}
          </h4>
        </div>
        <a href={`/Account/update/${id}`}>Update</a>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </body>
  );

  return <div>{display}</div>;
};

export default Profile;
