import './App.css';
import Home from './pages/home/Home'
import Record from './pages/record/Record'
import RateRecipies from './pages/rate_recipies/RateRecipies'
import Sponsorhips from './pages/sponsorships/Sponsorships'
import ToDo from './pages/to_do/ToDo'
import Photos from './pages/photos/Photos'
import Videos from './pages/videos/Videos'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/recordrecipies">
          <Record/>
        </Route>
        <Route exact path="/raterecipies">
          <RateRecipies/>
        </Route>
        <Route exact path="/sponsorships">
          <Sponsorhips/>
        </Route>
        <Route exact path="/todo">
          <ToDo/>
        </Route>
        <Route exact path="/photos">
          <Photos/>
        </Route>
        <Route exact path="/videos">
          <Videos/>
        </Route>
      </Router> 
    </div>
  );
}

export default App;
