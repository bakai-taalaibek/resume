import photo from './assets/39.jpg'
import { l, setLanguage } from './helper/translation/l'
import { useState } from 'react'

function App() {
  const [rerender, setRerender] = useState(false)
  const changeLanguage = () => {
    setLanguage()
    setRerender(!rerender)
  }

  return (
    <>
      <div className="page">
        <div className="header">
          <div className="photoElement">
            <img className="photoElement__image" src={photo} onClick={changeLanguage} />
          </div>
          <div>
            <p className="text text--name text--header">{l('name')}</p>
            <p className="text text--name text--header">{l('surname')}</p>
            <p className="position text text--position text--header">{l('position')}</p>
            {/* <p className="position position--secondLine text text--position text--header">{l('position2')}</p> */}
          </div>
          <div>
            <a
              className="contact text text--contact text--header"
              href="mailto:bakai.pochta@gmail.com"
              target="_blank"
            >
              <span>{l('email')}</span>
            </a>
            <p className="contact text text--contact text--header">
              <span>{l('phone')} </span>
            </p>
            <a
              className="contact text text--contact text--header"
              href="http://t.me/bakai_abc"
              target="_blank"
            >
              <span>{l('telegram')} </span>
            </a>
            <a
              className="contact text text--contact text--header"
              href="https://github.com/bakai-taalaibek"
              target="_blank"
            >
              <span>{l('github')} </span>
            </a>
            <a
              className="contact text text--contact text--header"
              href="https://gitlab.com/bakai-taalaibek"
              target="_blank"
            >
              <span>{l('gitlab')} </span>
            </a>
            <a
              className="contact text text--contact text--header"
              href="https://www.linkedin.com/in/bakai-taalaibek/"
              target="_blank"
            >
              <span>{l('linkedin')} </span>
            </a>
          </div>
        </div>
        <div className="main">
          <div className="largerArea">
            <div className="text text--heading">{l('experience')}</div>

            <div className="section section--main section--first">
              <div className="text text--subheading">
                {l('fortylinesTitle')}&nbsp;
                <span className="text text--secondary">{l('sinceOctober23')}</span>
              </div>
              <ul>
                <li className="text text--list list">{l('fortylinesBullet1')}</li>
                <li className="text text--list list">{l('fortylinesBullet2')}</li>
              </ul>
            </div>

            <div className="section section--main">
              <div>
                <span className="text text--subheading">{l('devsTitle')}&nbsp;</span>
                <span className="text text--secondary text--nowrap">{l('JulyOctober23')}</span>
              </div>
              <ul>
                <li className="text text--list list">{l('devsBullet1')}</li>
                {/* <li className="text text--list list">{l('devsBullet2')}</li> */}
              </ul>
            </div>

            <div className="section section--main">
              <div>
                <span className="text text--subheading">{l('rskTitle1')}&nbsp;</span>
                <span className="text text--subheading text--nowrap">{l('rskTitle2')}&nbsp;</span>
                <span className="text text--secondary">{l('juneJuly2023')}</span>
              </div>
              <ul>
                <li className="text text--list list">{l('rskBullet1')}</li>
                <li className="text text--list list">{l('rskBullet2')}</li>
                {/* <li className="text text--list list">{l('rskBullet3')}</li> */}
              </ul>
            </div>

            <div className="section section--main">
              <span className="text text--subheading">{l('makersTitle')}&nbsp;</span>
              <span className="text text--secondary">{l('marchMay2023')}</span>
              <ul>
                <li className="text text--list list">{l('makersBullet1')}</li>
                <li className="text text--list list">{l('makersBullet2')}</li>
              </ul>
            </div>

            <div className="section section--main">
              <div className="text text--subheading">
                <span className="text">{l('nationalBankTitle1')}&nbsp;</span>
                <span className="text">{l('nationalBankTitle2')}&nbsp;</span>
                <span className="text text--secondary">{l('20142023')}</span>
              </div>
              <ul>
                <li className="text text--list list">{l('nationalBankBullet1')}</li>
                <li className="text text--list list">{l('nationalBankBullet2')}</li>
              </ul>
            </div>
          </div>
          <div className="sidebar">
            <div className="section">
              <div className="text text--heading">{l('summary')}</div>
              <div className="text text--paragraph">{l('summaryContent')}</div>
            </div>
            <div className="section">
              <div className="text text--heading">{l('skills')}</div>
              <ul className="list">
                <li className="text text--list">HTML, SCSS, Tailwind</li>
                <li className="text text--list">Typescript, JavaScript</li>
                <li className="text text--list">React, Redux Toolkit</li>
                <li className="text text--list">Node, Express</li>
                <li className="text text--list">PostgreSQL, MongoDB</li>
                <li className="text text--list">git, bash, Linux, Docker</li>
              </ul>
            </div>
            <div className="section">
              <div className="text text--heading">{l('languages')}</div>
              <div>
                <p className="text text--list">{l('english')}</p>
                <p className="text text--list">{l('russian')}</p>
              </div>
            </div>
            <div className="section">
              <div className="text text--heading">{l('education')}</div>
              <div className="text text--paragraph">
                <span>{l('krsu')}&nbsp;</span>
                <span className="text text--secondary">{l('bishkek2012')}</span>
              </div>

              <div className="text text--paragraph">
                <span>{l('ort')}&nbsp;</span>
                <span className="text text--secondary">{l('Kyrgyzstan2007')} </span>
              </div>

              <div className="text text--paragraph">
                <span>{l('school')}&nbsp; </span>
                <span className="text text--secondary">{l('bishkek2007')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
