import './App.css';
import Home from './pages/home/Home'
import Record from './pages/record/Record'
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
      </Router> 
    </div>
  );
}

export default App;
