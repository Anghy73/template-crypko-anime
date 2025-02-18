import "./styles.css"
import img from "./img/anime-character-01.png"
import profile from "./img/anime-character.png"
import dice from "./img/dice-outline.svg"
import arrow from "./img/arrow-up-outline.svg"
import download from "./img/code-download-outline.svg"
import android from "./img/logo-android.svg"
import apple from "./img/logo-apple.svg"
function App() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <h1 className="header__logo--content">crypko<span className="header__logo--heart">🖤</span></h1>
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

        <div className="main__profile">
          <img className="main__profile--img" src={profile} alt="" />
          <div className="main__profile--banner">
            <img className="main__profile--arrow" src={arrow} alt="" />
          </div>
        </div>

        <div className="main__title">
          <h2 className="main__title--text">ANIME CHARACTER GENERATION</h2>
          <div className="main__seal">
            <svg width="250" height="250">
              <path id="curve" d="M 25 125 A 72 72 0 1 1 25 127"></path>
              <text className="text">
                <textPath href="#curve">
                  ANIME CHARACTER GENERATION PLATFORM CRYPKO V1.0 OFFICIAL RELEASE
                </textPath>
              </text>
            </svg>
            <div className="main__seal--content">
              <div className="main__seal--black">
                <p className="main__seal--text">START GENERATE</p>
              </div>
            </div>
          </div>
        </div>

        <div className="main__create">
          <img className="main__create--img" src={img} alt="" />
          <div className="main__create--random">
            <div className="main__create--content">
              <img className="main__create--icon" src={dice} alt="" />
              <p className="main__create--text">CREATE ANIME</p>
            </div>
          </div>
        </div>

        <div className="points"></div>
        <div className="main__info">
          <p className="main__info--text">The smartphone application MEMES, where Cryplo severs as the core technology behind, is now available in Apple App Store & Google Play.</p>
          <div className="main__info--content">
            <div className="main__buttons--apps">
              <button className="main__buttons--button">
                <img src={apple} alt="" />
              </button>
              <button className="main__buttons--button">
                <img src={android} alt="" />
              </button>
            </div>

            <button className="main__buttons--download">Download
              <span className="main__buttons--icon">
                <img src={download} alt="" />
              </span>
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
