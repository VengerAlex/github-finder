import {Component} from "react";
import axios from "axios";

import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";


class App extends Component {
    state = {
        users: [],
        loading: false
    }

    async componentDidMount() {
        this.setState({loading: true});
        console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
        console.log('+')
        const res = await axios.get(`https://api.github.com/users?client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
        {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        this.setState({users: res.data, loading: false});
    }

    render() {
        return (
            <div className='app'>
                <Navbar/>
                <div className="container">
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

