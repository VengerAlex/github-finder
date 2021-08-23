import axios from "axios";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layouts/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import { useState} from "react";

const App = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);


    const searchUser = async text => {
        setLoading(true);

        const res = await axios.get(`https://api.github.com/search/users?q=${text}&users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        setUsers(res.data.items);
        setLoading(false);
    }
    const getUser = async username => {
        setLoading(true);

        const res = await axios.get(`https://api.github.com/users/${username}?client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        setUser(res.data);
        setLoading(false);
    }
    const getUserRepos = async (username) => {
        setLoading(true);

        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        setRepos(res.data);
        setLoading(false);
    }

    const clearUser = () => {
        setUsers([]);
        setLoading(false);

    }
    const setAlertReq = (msg, type) =>  {
        setAlert({msg, type})

        setTimeout(() => setAlert(null), 3000)
    }


    return (
        <Router>
            <div className='app'>
                <Navbar/>
                <div className="container">
                    <Alert alert={alert}/>
                    <Switch>
                        <Route exact path='/' render={props => (
                            <>
                                <Search
                                    showClear={users.length > 0 ? true : false}
                                    searchUser={searchUser}
                                    clearUser={clearUser}
                                    setAlert={setAlertReq}
                                />
                                <Users
                                    loading={loading}
                                    users={users}
                                />
                            </>
                        )}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/user/:login' render={props => (
                            <User
                                {...props} getUserRepos={getUserRepos}
                                repos={repos}
                                getUser={getUser}
                                user={user}
                                loading={loading}/>)}
                        />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App;

