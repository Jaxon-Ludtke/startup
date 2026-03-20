import React, {useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getLoggedInUser, removeLoggedInUser } from "../auth";

export default function Scenarios() {
  const navigate = useNavigate();
  const loggedInEmail = getLoggedInUser();
  const [scenarios, setScenarios] = useState([]);

    useEffect(() => {
    fetch("/api/scenarios")
      .then((response) => response.json())
      .then((data) => {
        setScenarios(data);
      })
      .catch(() => {
        console.log("Failed to load scenarios");
      });
  }, []);

    async function handleLogout() {
    await fetch("/api/auth/logout", { method: "DELETE" });
    removeLoggedInUser();
    navigate("/");
    }

  async function handleDeleteScenario(id) {
    const response = await fetch(`/api/scenario/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      const updated = scenarios.filter((s) => s.id !== id);
      setScenarios(updated);
    } else {
      alert("Failed to delete scenario");
    }
  }

  return (
    <>
      <header>
        <h1>DealFlow</h1>

        <nav>
          <menu>
            <li><Link to="/">Login</Link></li>
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
        <hr />
        <h2>Saved Scenarios</h2>

        {scenarios.length === 0 ? (
          <p>No scenarios saved yet. Go to Calculate and save one.</p>
        ) : (
          <ul>
            {scenarios.map((s) => (
              <li key={s.id} style={{ marginBottom: "14px" }}>
                <strong>{s.name}</strong>
                <br />
                Cash on Cash Return: {Number(s.coc).toFixed(1)}%
                <br />
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDeleteScenario(s.id)}
                  style={{ marginTop: "6px" }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}

        <img
          src="https://media.istockphoto.com/id/2175972607/photo/modern-luxury-home-with-geometric-driveway-and-sunset-sky.jpg?s=612x612&w=0&k=20&c=0pvJ_frDStQGywjOptq9XmyEQgVIxfH3Yg7MbYIfIjI="
          alt="House Photo"
        />
      </main>

      <footer>
        <hr />
        <span className="text-reset">Jaxon Ludtke</span>
        <br />
        <a href="https://github.com/Jaxon-Ludtke/startup.git">GitHub</a>
      </footer>
    </>
  )
}
