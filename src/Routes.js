import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import About from './components/About';
// import Error from './components/Error';
// import FoodDetails from './components/FoodDetails';
// import Nav from './components/Nav';
// import MealDisplay from './container/MealDisplay';

const Routes = () => (
  <Router>
    <Nav />
    <Switch>
      {/* <Route exact path="/" component={FoodsList} />
      <Route path="/foodDetails/:id" component={FoodDetails} />
      <Route path="/about" component={About} />
      <Route component={Error} /> */}
    </Switch>
  </Router>
);

export default Routes;
