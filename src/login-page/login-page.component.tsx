import './login-page.component.scss'

import { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .get("https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view", {
        params: {
          view: "Grid view",
          filterByFormula: `AND({Username} = "${username}", {Password} = "${password}")`,
        },
        headers: {
          Authorization: "Bearer keyfXgn8PL6pB3x32",
        },
      })
      .then((response) => {
        if (response.data.records.length > 0) {
          setMessage("Login successful!");
        } else {
          setMessage("Incorrect username or password.");
        }
      })
      .catch((error) => {
        console.error(error);
        setMessage("Error occurred while fetching data.");
      });
  }

  return (
    <div className='container'>
    <form onSubmit={handleSubmit} className='login-form'>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Login</button>
      <p>{message}</p>
    </form>
    </div>
  );
}

export default LoginForm;
