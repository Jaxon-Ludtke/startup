export default function Login() {
  return (
    <>
      <header>
        <h1>DealFlow</h1>
        <p>
          <span>🏠</span> An application that calculates real estate investment scenarios so you don't have to.
        </p>

        <nav>
          <menu>
            <li><a href="/">Home</a></li>
            <li><a href="/scenarios">Scenarios</a></li>
            <li><a href="/calculate">Calculate</a></li>
          </menu>
        </nav>

        <h4>
          User: <span className="username">jpludtke</span>
        </h4>
      </header>

      <main>
        <h1>Login to DealFlow</h1>

        <form>
          <div>
            <span>📧</span>
            <input type="text" placeholder="your@email.com" />
          </div>

          <div>
            <span>🗝️</span>
            <input type="password" placeholder="password" />
          </div>

          <button type="submit">Login</button>
          <button type="button">Create</button>
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
