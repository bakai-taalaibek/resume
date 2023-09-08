import photo from './assets/39.jpg'

function App() {
  return (
    <>
      <div className="page">
        <div className="header"> 
          <div className='photoElement'>
            <img className='photoElement__image' src={photo} />
          </div>

          <div>
            <p className='text text--name text--header'>Бакай</p>
            <p className='text text--name text--header'>Таалайбек уулу</p>
            <p className='position text text--position text--header'>Full-Stack разработчик</p>
          </div>

          <div>
            <a 
              className='contact text text--contact text--header' 
              href="mailto:bakai.pochta@gmail.com"
              target="_blank">
                <span>bakai.pochta@gmail.com</span>
            </a>
            <p 
              className='contact text text--contact text--header'>
                <span>+996 500391990 </span>
            </p>
            <a 
              className='contact text text--contact text--header' 
              href="http://t.me/bakai_abc"
              target="_blank">
                <span>t.me/bakai_abc </span>
            </a>
            <a 
              className='contact text text--contact text--header' 
              href="https://github.com/bakai-taalaibek"
              target="_blank">
                <span>github.com/bakai-taalaibek </span>
            </a>
            <a 
              className='contact text text--contact text--header' 
              href="https://gitlab.com/bakai-taalaibek"
              target="_blank">
                <span>gitlab.com/bakai-taalaibek </span>
            </a>
            <a 
              className='contact text text--contact text--header' 
              href="https://www.linkedin.com/in/bakai-taalaibek/"
              target="_blank">
                <span>linkedin.com/in/bakai-taalaibek </span>
            </a>
          </div> {/*contacts */}
        </div> {/*header */}

        <div className="main">
          <div className='largerArea'>
            <div className='text text--heading'>Опыт</div>

            <div className='section'> 

              <div className='text text--subheading'>
                Front-End разработчик, “Devs Factory”,
                <span className='text text--secondary'> c июля 2023 г.</span>
              </div>
              <ul>
                <li className='text text--list list'>Разработка клиентской части онлайн-рекрутинг сервиса, в частности динамичных форм и чата через Socket.io</li>
                <li className='text text--list list'>Работа в команде из 3 Front-End разработчиков (TypeScript, React, SCSS, Redux Toolkit), 2 Back-End разработчиков (Java, Spring, PostgreSQL), проектного менеджера (Scrum, Jira) и дизайнера (Figma)</li>
              </ul>
            </div>

            <div className='section'> 
              <div className='text text--subheading'>
                Стажер Front-End разработчик, <br/>“РСК Банк” + “Makers”,
                <span className='text text--secondary'> июнь-июль 2023</span>
              </div>
              <ul>
                <li className='text text--list list'>Занял первое место по результатам стажировки</li>
                <li className='text text--list list'>Разработал клиентскую часть онлайн-системы получения очереди для банка</li>
                <li className='text text--list list'>Работа в команде из 3 Front-End разработчиков (JavaScript, React, SCSS, Zustand), 2 Back-End разработчиков (Python, Django, PostgreSQL), проектного менеджера (Scrum, Jira), 2 дизайнеров (Figma) и 2 мобильных разработчиков (Flutter)</li>
              </ul>
            </div>

            <div className='section'> 
              <div className='text text--subheading'>
                Стажер Full-Stack разработчик, “Makers”,<br/>
                <span className='text text--secondary'> май-июль 2023 г</span>
              </div>
              <ul>
                <li className='text text--list list'>Разработал веб-сайт для ведения блогов (JavaScript, Tailwind, Zustand, React Router, React Query, Node, Express, MongoDB)</li>
                <li className='text text--list list'>Разработал клиентскую часть сайта по продаже недвижимости (JavaScript, SСSS, Redux Toolkit), при этом был избран лидером группы из 8 человек</li>
              </ul>
            </div>

            <div className='section'> 
              <div className='text text--subheading'>
              Ведущий экономист, Национальный банк Кыргызской Республики,
                <span className='text text--secondary'> 2014-2023</span>
              </div>
              <ul>
                <li className='text text--list list'>Получил Почетную грамоту за особые заслуги перед Национальным банком</li>
                <li className='text text--list list'>Используя продвинутые формулы Excel, оптимизировал составление отчетов на 90%</li>
              </ul>
            </div>


          </div> {/*largerArea */}

          <div className='sidebar'>
            <div className='section'> 
              <div className='text text--heading'>О себе</div>
              <div className='text text--paragraph'>Full-Stack разработчик с девятилетним опытом в банковском деле, вошел в число 50 лучших выпускников по итогам Общереспубликанского тестирования. Активно развиваюсь в сфере веб-разработки. </div>
            </div>

            <div className='section'> 
              <div className='text text--heading'>Навыки</div>
              <ul className='list'>
                <li className='text text--list'>HTML, SCSS, Tailwind</li>
                <li className='text text--list'>JavaScript, Typescript</li>
                <li className='text text--list'>React, Redux Toolkit</li>
                <li className='text text--list'>Node, Express.js</li>
                <li className='text text--list'>MongoDB, PostgreSQL</li>
                <li className='text text--list'>git, bash, Linux, Docker</li>
              </ul> 
            </div> {/*skills */}

            <div className='section'> 
              <div className='text text--heading'>Языки</div>
              <div>
                <p className='text text--list'>Английский: Advanced / С1</p>
                <p className='text text--list'>Русский: Fluent / С2</p>
              </div>
            </div>

            <div className='section'> 
              <div className='text text--heading'>Образование</div>
              <div className='text text--paragraph'>
                <span>Окончил с отличием Кыргызско-Российский Славянский университет, Экономический факультет, </span>
                <span className='text text--secondary'>Бишкек, 2012</span>
              </div>

              <div className='text text--paragraph'>
                <span>Вошел в число 50 лучших выпускников по итогам Общереспубликанского тестирования, </span>
                <span className='text text--secondary'>Кыргызстан, 2007 </span>
              </div>

              <div className='text text--paragraph'>
                <span>Окончил с отличием среднюю школу №24, </span>
                <span className='text text--secondary'> Бишкек, 2007</span>
              </div>
            </div>
 
          </div>
        </div>
      </div>
    </>
  )
}
export default App;