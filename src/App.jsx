import "./styles.css"

function App() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <h1 className="header__logo--content">crypki <span className="header__logo--heart">🖤</span></h1>
        </div>
        <nav className="nav">
          <ul className="nav__content">
            <li className="nav__item">
              <a className="nav__link" href="#">Guideline</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">Faq</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">Contact Us</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">Discord</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">Twitter</a>
            </li>
          </ul>
        </nav>
        <div className="header__button">
          <button className="header__button--content">Join Us</button>
        </div>
      </header>
      <main className="main">
        <h2>Title Hello</h2>
      </main>
    </>
  )
}

export default App
