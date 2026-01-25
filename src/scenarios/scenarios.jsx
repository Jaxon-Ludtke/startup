import React from 'react'
import { Link } from 'react-router-dom'

export default function Scenarios() {
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
          User: <span className="username">jpludtke</span>
        </h4>
      </header>

      <main>
        <hr />
        <h2>Saved Scenarios</h2>

        <ul>
          <li>
            <strong>Provo Duplex - 20% down</strong>
            <br />
            Cash on Cash Return: 7.2%
          </li>

          <li>
            <strong>Orem SFH - Low cash flow</strong>
            <br />
            Cash on Cash Return: 3.4%
          </li>

          <li>
            <strong>Lehi Townhome - Higher rent</strong>
            <br />
            Cash on Cash Return: 9.1%
          </li>
        </ul>

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
