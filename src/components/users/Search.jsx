import React, {useState} from 'react';

const Search = ({searchUser, clearUser, showClear, setAlert}) => {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            console.log('+')
            setAlert('Please enter something', 'light')
        } else {
            searchUser(text);
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
                />
                <input type='submit' value='Search' className='btn bg-success btn-block'/>
            </form>
            {showClear && <button
                onClick={clearUser}
                className="btn btn-block btn-light">
                Clear
            </button>}
        </div>
    );
}

export default Search;