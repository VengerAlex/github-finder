import React from 'react';

class Search extends React.Component {
    state = {
        text: ''
    }

    onChange = (e) => {
        this.setState({text: e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUser(this.state.text);
        this.setState({text: ''})
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.onSubmit}
                    className='form'
                >
                    <input
                        onChange={this.onChange}
                        type="text"
                        name='text'
                        placeholder='Search for'
                        value={this.state.text}
                    />
                    <input type='submit' value='Search' className='btn bg-success btn-block'/>
                </form>
                {this.props.showClear && <button
                    onClick={this.props.clearUser}
                    className="btn btn-block btn-light">
                    Clear
                </button>}
            </div>
        );
    }
}

export default Search;