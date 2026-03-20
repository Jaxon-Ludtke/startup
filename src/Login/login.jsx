import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { saveLoggedInUser, getLoggedInUser, removeLoggedInUser } from "../auth";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const loggedInEmail = getLoggedInUser();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "DELETE" });
    removeLoggedInUser();
    navigate("/");
  }

  async function handleLogin() {
    setErrorMessage("");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    });

    if (response.ok) {
      saveLoggedInUser(email);
      navigate("/calculate");
    } else {
      const body = await response.json();
      setErrorMessage(body.msg);
    }
  }

  async function handleCreateAccount() {
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Please enter an email and password");
      return;
    }

    const response = await fetch("/api/auth/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    });

    if (response.ok) {
      saveLoggedInUser(email);
      navigate("/calculate");
    } else {
      const body = await response.json();
      setErrorMessage(body.msg);
    }
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
          User: <span className="username">{loggedInEmail ? loggedInEmail : "Not logged in"}</span>
          {loggedInEmail && (
            <button onClick={handleLogout} style={{ marginLeft: "10px" }}>Logout</button>
          )}
        </h4>
      </header>

      <main>
        <h1>Login to DealFlow</h1>

        {errorMessage && (
          <p style={{ color: "red" }}>{errorMessage}</p>
        )}

        <div>
          <span>📧</span>
          <input
            type="text"
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

        <br />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleCreateAccount} style={{ marginLeft: "10px" }}>Create Account</button>
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