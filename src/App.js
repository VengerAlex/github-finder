import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Alert from "./components/layouts/Alert";
import About from "./components/pages/About";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import Home from "./components/pages/Home";
import User from "./components/users/User";
import NotFound from "./components/pages/NotFound";

const App = () => {
    return (
        <GithubState>
            <AlertState>
                <Router>
                    <div className='app'>
                        <Navbar/>
                        <div className="container">
                            <Alert/>
                            <Switch>
                                <Route exact path='/' render={props => (
                                    <Home />
                                )}/>
                                <Route exact path='/about' component={About}/>
                                <Route exact path='/user/:login' component={User}/>
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </AlertState>
        </GithubState>
    )
}

export default App;

