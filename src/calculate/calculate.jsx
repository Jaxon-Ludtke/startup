import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { clearUser, getUser } from "../auth";

export default function Calculate() {
  const navigate = useNavigate();
  const user = getUser();

  function logout() {
  clearUser();
  navigate("/");
}

  const [cashflow, setCashflow] = useState("");
  const [cashinvested, setCashinvested] = useState("");
  const [results, setResults] = useState("");

  function handleCalculate(e) {
    e.preventDefault();

    const flowNum = Number(cashflow) || 0;
    const investedNum = Number(cashinvested) || 0;

    if (investedNum <= 0) {
      setResults(""); // or "0.0"
      return;
    }

    const coc = (flowNum / investedNum) * 100;
    setResults(coc.toFixed(1));
  }

  return (
    <>
      <header>
        <h1>DealFlow</h1>

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
        <hr />
      </header>

      <main className="container">
        <form onSubmit={handleCalculate}>
          <div>
            <label htmlFor="cashflow">💵 What is your annual cash flow?</label>
            <input
              type="number"
              id="cashflow"
              name="cashflow"
              placeholder="4000"
              value={cashflow}
              onChange={(e) => setCashflow(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="cashinvested">📈 What is your cash invested?</label>
            <input
              type="number"
              id="cashinvested"
              name="cashinvested"
              placeholder="35000"
              value={cashinvested}
              onChange={(e) => setCashinvested(e.target.value)}

            />
          </div>

          <button type="submit" className="btn btn-primary">
            Calculate
          </button>

          <div>
            <label htmlFor="results">Cash on Cash Return:</label>
            <input
              type="text"
              id="results"
              placeholder="11.4"
              value={results}
              readOnly
            />
          </div>
        </form>

        <hr />

        <div>
          <h3>Save This Scenario</h3>

          <label htmlFor="scenario-name">Scenario Name</label>
          <br />
          <input
            type="text"
            id="scenario-name"
            name="scenarioName"
            placeholder="Provo Duplex, 20% down"
          />
          <br /><br />

          <button type="button" className="btn btn-secondary">
            Save Scenario
          </button>
        </div>

        <hr />

        <div>
          <h4>Live Feed</h4>
          <ul>
            <li className="player name">
              John Doe submitted a deal... 5.5% CoC return!
            </li>
            <li className="player name">
              Jack Smith submitted a deal... 3.3% CoC return!
            </li>
            <li className="player name">
              Johnny Test submitted a deal... 3.1% CoC return!
            </li>
          </ul>
        </div>

        <div>
          <h4>Live Interest Rate Tracker</h4>
          <p>Bond and/or mortgage interest rates today: 5.5%</p>
        </div>
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

