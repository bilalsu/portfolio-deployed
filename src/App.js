import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul><li><Link to="/">Home</Link></li>
            <li><Link to="/AboutMe">AboutMe</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/ContactMe">ContactMe</Link></li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/AboutMe' component={AboutMe} />
        <Route path='/Projects' component={Projects} />
        <Route path='/ContactMe' component={ContactMe} />
      </Switch>

    </Router>
  )
}

export default App;