import {Component} from "react";
import axios from "axios";

import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";


class App extends Component {
    state = {
        users: [],
        loading: false
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

    render() {
        return (
            <div className='app'>
                <Navbar/>
                <div className="container">
                    <Search
                        showClear={this.state.users.length > 0 ? true : false}
                        searchUser={this.searchUser}
                        clearUser={this.clearUser}
                    />
                    <Users
                        loading={this.state.loading}
                        users={this.state.users}
                    />
                </div>
            </div>
        )
    }
}

export default App;

