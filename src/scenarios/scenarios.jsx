import React, {useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { clearUser, getUser } from "../auth";

export default function Scenarios() {

  const navigate = useNavigate();
  const user = getUser();

  function logout() {
  clearUser();
  navigate("/");
}
  const [scenarios, setScenarios] = useState([]);

  useEffect(() => {
  const existing = JSON.parse(localStorage.getItem("dealflow_scenarios") || "[]");
  setScenarios(existing);
  }, []);

  function deleteScenario(id) {
  const updated = scenarios.filter((s) => s.id !== id);
  setScenarios(updated);
  localStorage.setItem("dealflow_scenarios", JSON.stringify(updated));
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
        User: <span className="username">{user ? user.email : "Not logged in"}</span>
        {user && (
        <button onClick={logout} style={{ marginLeft: "10px" }}>
        Logout
        </button>
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
                  onClick={() => deleteScenario(s.id)}
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
