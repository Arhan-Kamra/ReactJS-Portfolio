import "./App.css";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import About from "./components/About/About.js";
import CaseStudies from "./components/CaseStudies/CaseStudies.js";
import Contact from "./components/Contact/Contact.js";
import Home from "./components/Home/Home.js";

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home New</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/case-studies'>CaseStudies</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path='/about'>
              <About cname='About component' />
            </Route>
            <Route path='/case-studies'>
              <CaseStudies cname='CaseStudies component' />
            </Route>
            <Route path='/contact'>
              <Contact cname='Contact component' />
            </Route>
            <Route path='/home'>
              <Home cname='Home component' />
            </Route>
            <Route path='/'>
              <Home cname='Home component' />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
