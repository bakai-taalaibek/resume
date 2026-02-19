import { useState } from 'react'
import { l, setLanguage } from './helper/translation/l'

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
          <div className="naming" onClick={changeLanguage}>
            <div className="namingColumn">
              <span className="text text--name">{l('name')}</span>
              <span className="text text--subname">{l('nameSubname')}</span>
            </div>
            <div className="namingColumn">
              <span className="text text--name">{l('surname')}</span>
              <span className="text text--subname">{l('surnameSubname')}</span>
            </div>
          </div>
          <div className="contacts">
            <a
              className="contact text text--contact text--header text--link"
              href="mailto:bakai.pochta@gmail.com"
              target="_blank"
            >
              <span>{l('email')}</span>
            </a>
            <p className="contact text text--contact text--header text--link">
              <span>{l('phone')} </span>
            </p>
            {/* <a className="contact text text--contact text--header" href="http://t.me/bakai_abc" target="_blank">
            <span>{l('telegram')} </span>
            </a> */}
            <a
              className="contact text text--contact text--header text--link"
              href="https://github.com/bakai-taalaibek"
              target="_blank"
            >
              <span>{l('github')} </span>
            </a>
            {/* <a
              className="contact text text--contact text--header"
              href="https://gitlab.com/bakai-taalaibek"
              target="_blank"
              >
              <span>{l('gitlab')} </span>
              </a> */}
            <a
              className="contact text text--contact text--header text--link"
              href="https://www.linkedin.com/in/bakai-taalaibek/"
              target="_blank"
            >
              <span>{l('linkedin')} </span>
            </a>
          </div>
        </div>
        <div className="main">
          <div className="summary">
            {/* <div className="text text--heading">{l('summary')}</div> */}
            <span className="text text--emphasys highlight">{l('summaryMain')}</span>
            <span className="text text--summary">{l('summaryContent')}</span>
          </div>

          <div className="section">
            <div className="text text--heading">{l('projects')}</div>
            <hr></hr>
            <div className="text text--subheading">
              {l('poputiTitle')}
              <a className="text text--link" href="poputi.kg" target="_blank">
                <span>poputi.kg</span>
              </a>
            </div>
            <ul className="list">
              <li className="text text--list">{l('poputiBullet1')}</li>
            </ul>
          </div>
          <div className="section">
            <div className="text text--heading">{l('experience')}</div>
            <hr></hr>
            <div>
              <div className="text text--subheading">
                {l('epamTitle')}&nbsp;
                <span className="text text--secondary text--nowrap">{l('sinceMarch25')}</span>
              </div>
              <ul>
                <li className="text text--list list">
                  {l('epamBullet1')}
                  <span className="highlight">{l('epamBullet1Highlighted')}</span>
                </li>
                <li className="text text--list list">{l('epamBullet2')}</li>
                <li className="text text--list list">
                  <span className="highlight">{l('epamBullet3Highlighted')}</span>
                  {l('epamBullet3')}
                </li>
                <li className="text text--list list">{l('epamBullet4')}</li>
                {/* <li className="text text--list list">{l('fortylinesBullet2')}</li> */}
              </ul>
            </div>

            <div className="experience--item">
              <div className="text text--subheading">
                {l('fortylinesTitle')}&nbsp;
                <span className="text text--secondary">{l('sinceOctober23')}</span>
              </div>
              <ul>
                <li className="text text--list list">{l('fortylinesBullet1')}</li>
                {/* <li className="text text--list list">{l('fortylinesBullet2')}</li> */}
              </ul>
            </div>

            <div className="experience--item">
              <div>
                <span className="text text--subheading">{l('devsTitle')}&nbsp;</span>
                <span className="text text--secondary text--nowrap">{l('JulyOctober23')}</span>
              </div>
              <ul>
                <li className="text text--list list">{l('devsBullet1')}</li>
                {/* <li className="text text--list list">{l('devsBullet2')}</li> */}
              </ul>
            </div>
            <div className="experience--item">
              <div>
                <span className="text text--subheading">{l('rskTitle1')}&nbsp;</span>
                <span className="text text--subheading text--nowrap">{l('rskTitle2')}&nbsp;</span>
                <span className="text text--secondary">{l('juneJuly2023')}</span>
              </div>
              <ul>
                <li className="text text--list list">
                  <span className="highlight">{l('rskBullet1Highlighted')}</span>
                  {l('rskBullet1')}
                </li>
              </ul>
            </div>
            <div className="experience--item">
              <div>
                <span className="text text--subheading">{l('makersTitle')}&nbsp;</span>
                <span className="text text--secondary">{l('marchMay2023')}</span>
              </div>
              <ul>
                <li className="text text--list list">{l('makersBullet1')}</li>
                {/* <li className="text text--list list">{l('makersBullet2')}</li> */}
              </ul>
            </div>
            <div className="experience--item">
              <div className="text text--subheading">
                <span className="text">{l('nationalBankTitle1')}&nbsp;</span>
                <span className="text">{l('nationalBankTitle2')}&nbsp;</span>
                <span className="text text--secondary">{l('20142023')}</span>
              </div>
              <ul>
                <li className="text text--list list">
                  <span className="highlight">{l('nationalBankBullet1Highlighted')}</span>
                  {l('nationalBankBullet1')}
                </li>
              </ul>
            </div>
          </div>

          <div className="section">
            <div className="text text--heading">{l('skills')}</div>
            <hr></hr>

            <ul className="list">
              <li className="text text--list">
                C#, ASP .NET Core, EF Core, LINQ, REST, OOP, SOLID, PostgreSQL, SQL Server, JS, TS, React,
                Docker
              </li>
              <li className="text text--list">
                <span className="text text--list highlight">{l('english')}</span>
                {/* <span className="text text--list">{l('russian')}</span> */}
              </li>
            </ul>
          </div>
          <div className="section">
            <div className="text text--heading">{l('education')}</div>
            <hr></hr>

            <ul className="list">
              <li className="text text--list">
                <span className="highlight">{l('krsuHighlighted')}</span>
                <span>{l('krsu')}&nbsp;</span>
                <span className="text text--secondary text--nowrap">{l('bishkek2012')}</span>
              </li>
              <li className="text text--list">
                <span className="highlight">{l('ortHighlighted')}</span>
                <span>{l('ort')}&nbsp;</span>
                <span className="text text--secondary">{l('Kyrgyzstan2007')} </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
