import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import MealDetail from './MealDetail';
import MealCatalogue from '../containers/MealCatalogue';
import ErrorPage from './ErrorPage';
import About from './About';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={MealCatalogue} />
          <Route path="/meal/:mealId" exact component={MealDetail} />
          <Route path="/about" exact component={About} />
          <Route path="/error" exact component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
