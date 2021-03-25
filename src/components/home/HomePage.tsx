import * as React from 'react';
import { Link } from 'react-router-dom';
import './styles/homePage.css';

const HomePage = () => (
  <section className="home">
    <header className="home__header">
      <h2 className="home__heading">Learn</h2>
    </header>

    <div className="">
      <Link className="" to="/paths">
        Get started
      </Link>
    </div>
  </section>
);

export default HomePage;
