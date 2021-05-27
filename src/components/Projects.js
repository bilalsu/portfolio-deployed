import React from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import Project1 from '../ProjectPages/Project1'
import Project2 from '../ProjectPages/Project2'

function Projects() {
    return (
        <div>
            <div>These are two projects that I've worked on</div>

            <Router>
                <div className="App">
                    <nav>
                        <ul>
                            <li><Link to="/Project1">Project 1</Link></li>
                            <li><Link to="/Project2">Project 2</Link></li>
                        </ul>
                    </nav>
                </div>

                <Switch>
                    <Route path='/Project1' component={Project1} />
                    <Route path='/Project2' component={Project2} />
                </Switch>

            </Router>
        </div>
    )
}

export default Projects