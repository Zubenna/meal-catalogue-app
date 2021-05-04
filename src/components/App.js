import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import MealDetail from './MealDetail';
import MealCatalogue from './MealCatalogue';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={MealCatalogue} />
          <Route path="/meal/:mealId" exact component={MealDetail} />
          <Route>Page not found 404 error</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
