import React from 'react';

const UserItem = ({user: {id, login, avatar_url, html_url}}) => {

    return (
        <div className='card text-center'>
            <img
                style={{width: '50%'}}
                src={avatar_url}
                className='round-img'
            />
            <h3>{login}</h3>
            <div>
                <a
                    href={html_url}
                    className='my-1 btn btn-dark btn-sm'>
                    More
                </a>
            </div>
        </div>
    );
}


export default UserItem;