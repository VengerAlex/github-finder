import React, {useContext} from 'react';

import UserItem from "./UserItem";
import Spinner from "../layouts/Spinner";
import githubContext from "../../context/github/GithubContext";

const Users = () => {
    const gbContext = useContext(githubContext);
    const {loading, users} = gbContext;

    return (
        loading
            ? <Spinner/>
            : (<div style={userStyle}>
                {users.map((el) => (
                    <UserItem key={el.id} user={el}/>
                ))}
            </div>)
    );
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users;