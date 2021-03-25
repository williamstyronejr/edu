import * as React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './home/HomePage';
import PathPage from './paths/PathPage';
import ExercisePage from './exercises/ExercisePage';

const Root = (props: Object) => {
  return (
    <Router>
      <main className="page--main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/paths" component={PathPage} />
          <Route path="/exercise/:id" component={ExercisePage} />
        </Switch>
      </main>
    </Router>
  );
};

export default Root;
