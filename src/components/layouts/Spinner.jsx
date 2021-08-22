import React, {Fragment} from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
    return (
        <Fragment>
            <img
                style={{margin: 'auto', display: 'block', width: '200px'}}
                alt="Loading..."
                src={spinner}
            />
        </Fragment>
    );
};

export default Spinner;