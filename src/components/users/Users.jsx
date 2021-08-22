import React from 'react';

import UserItem from "./UserItem";
import Spinner from "../layouts/Spinner";

const Users = ({users, loading}) => {

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