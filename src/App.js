import Home from '../src/Pages/Home';
import { BrowserRouter as Router, Route, Switch}  from "react-router-dom";
import Menupage from './Pages/Menupage';
import "./App.css"
function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route path="/" exact>
            <Home/>
          </Route>

          <Route path="/menu" exact>
            <Menupage/>
          </Route> 

        </Switch>
      </Router>
    </div>
  );
}

export default App;
