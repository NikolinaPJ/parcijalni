import "./Button.css";
import { useEffect, useState } from "react";

function getGitHubApi() {
  return fetch("https://api.github.com/users/reduxjs")
    .then((response) => {
      return response.json();
    });
}

export function GitHubApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getGitHubApi()
      .then((data) => { setData(data); })
      .catch((error) => { setError(error); });
  }, []);

  if (error !== null) {
    return <div>{error.message}</div>;
  }

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div >
        
        <img className="photo" src={data.avatar_url} alt={data.bio}  />
        <h1>{data.name}</h1>
        <figcaption>{data.login}</figcaption>
        <button type="reset" className="button">Reset</button>
        

    </div>
  
  );
}

