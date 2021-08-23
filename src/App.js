import {Component} from "react";
import axios from "axios";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layouts/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";

class App extends Component {
    state = {
        users: [],
        loading: false,
        alert: null,
        user: {},
        repos: []
    }

    async componentDidMount() {
        this.setState({loading: true});

        const res = await axios.get(`https://api.github.com/users?client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
        {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        this.setState({users: res.data, loading: false});
    }

    searchUser = async (text) => {
        this.setState({loading: true})

        const res = await axios.get(`https://api.github.com/search/users?q=${text}&users?client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
        {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        this.setState({users: res.data.items, loading: false});
    }
    clearUser = () => {
        this.setState({users: [], loading: false})
    }
    setAlert = (msg, type) => {
        this.setState({alert: {msg, type}})

        setTimeout(() => this.setState({alert: null}), 3000)
    }
    getUser = async (username) => {
        this.setState({loading: true});

        const res = await axios.get(`https://api.github.com/users/${username}?client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
        {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        this.setState({user: res.data, loading: false});
    }
    getUserRepos = async (username) => {
        this.setState({loading: true});

        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
        {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        this.setState({repos: res.data, loading: false});
    }


    render() {

        return (
            <Router>
                <div className='app'>
                    <Navbar/>
                    <div className="container">
                        <Alert alert={this.state.alert}/>
                        <Switch>
                            <Route exact path='/' render={props => (
                                <>
                                    <Search
                                        showClear={this.state.users.length > 0 ? true : false}
                                        searchUser={this.searchUser}
                                        clearUser={this.clearUser}
                                        setAlert={this.setAlert}
                                    />
                                    <Users
                                        loading={this.state.loading}
                                        users={this.state.users}
                                    />
                                </>
                            )}/>
                            <Route exact path='/about' component={About}/>
                            <Route exact path='/user/:login' render={props => (
                                <User
                                    {...props} getUserRepos={this.getUserRepos}
                                    repos={this.state.repos}
                                    getUser={this.getUser}
                                    user={this.state.user}
                                    loading={this.state.loading}/>)}
                            />
                        </Switch>
                    </div>
                </div>
            </Router>

        )
    }
}

export default App;

