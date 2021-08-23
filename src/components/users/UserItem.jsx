import React from 'react';
import {Link} from "react-router-dom";

const UserItem = ({user: {id, login, avatar_url}}) => {

    return (
        <div className='card text-center'>
            <img
                style={{width: '50%'}}
                src={avatar_url}
                className='round-img'
            />
            <h3>{login}</h3>
            <div>
                <Link
                    to={`/user/${login}`}
                    className='my-1 btn btn-dark btn-sm'>
                    More
                </Link>
            </div>
        </div>
    );
}


export default UserItem;