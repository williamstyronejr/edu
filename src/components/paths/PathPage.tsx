import * as React from 'react';
import { Link } from 'react-router-dom';
import './styles/index.css';

const PathPage = () => {
  const [question1, setQuestion1] = React.useState(0);

  function setCodingType(type: number) {
    localStorage.setItem('codingType', type.toString());
    setQuestion1(type);
  }

  return (
    <section className="paths">
      <header className="path__header">
        <h4 className="paths__heading"></h4>
      </header>

      {question1 === 0 ? (
        <div className="">
          <p className="">How will you like to learn?</p>
          <button className="" type="button" onClick={() => setCodingType(1)}>
            Coding Blocks
          </button>
          <span>Recommend for beginners</span>

          <button className="" type="button" onClick={() => setCodingType(2)}>
            Coding Langauge
          </button>
        </div>
      ) : null}

      {question1 > 0 ? (
        <div className="">
          <p className=""></p>
        </div>
      ) : null}

      <div className="path__content">
        <ul className="path__list">
          <li className="path__item">
            <Link to="/"></Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PathPage;
