import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, setUser, clearUser } from "../auth";

export default function Login() {
   const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

  
    if (!email.trim()) return;

    setUser({
      email: email.trim(),
      name: email.trim().split("@")[0], 
    });

    navigate("/calculate"); 
  }

  const user = getUser();

  function logout() {
  clearUser();
  navigate("/");
}

  

  return (
    <>
      <header>
        <h1>DealFlow</h1>
        <p>
          <span>🏠</span> An application that calculates real estate investment scenarios so you don't have to.
        </p>

        <nav>
          <menu>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/scenarios">Scenarios</Link></li>
            <li><Link to="/calculate">Calculate</Link></li>
          </menu>
        </nav>

        <h4>
        User: <span className="username">{user ? user.email : "Not logged in"}</span>
        {user && (
        <button onClick={logout} style={{ marginLeft: "10px" }}>
          Logout
        </button>
          )}
        </h4>

      </header>

      <main>
        <h1>Login to DealFlow</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <span>📧</span>
            <input type="text" 
            placeholder="your@email.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <span>🗝️</span>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
          <button type="button" onClick={() => alert("Mock create later!")}>Create</button>
        </form>
      </main>

      <footer>
        <hr />
        <span className="text-reset">Jaxon Ludtke</span>
        <br />
        <a href="https://github.com/Jaxon-Ludtke/startup.git">GitHub</a>
      </footer>
    </>
  );
}
