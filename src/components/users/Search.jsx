import React, {useContext, useState} from 'react';

import githubContext from "../../context/github/GithubContext";
import alertContext from "../../context/alert/AlertContext";

const Search = () => {
    const gtContext = useContext(githubContext);
    const AlertContext = useContext(alertContext);


    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            AlertContext.setAlert('Please enter something', 'light')
        } else {
            gtContext.searchUser(text);
            setText('');
        }
    }

    return (
        <div>
            <form
                onSubmit={onSubmit}
                className='form'
            >
                <input
                    onChange={onChange}
                    type="text"
                    name='text'
                    placeholder='Search for'
                    value={text}
                    style={{height: '70px'}}
                />
                <input
                    type='submit'
                    value='Search'
                    className='btn bg-success btn-block'
                />
            </form>
            {gtContext.users.length > 0 && <button
                onClick={gtContext.clearUser}
                className="btn btn-block btn-light">
                Clear
            </button>}
        </div>
    );
}

export default Search;