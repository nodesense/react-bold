import React from 'react';

import withStorage from './Storage';

const Home = (props) => {
    console.log('Home ', props);
    return (
        <div>
            <h2>Home Page</h2>

            <button onClick={ () => props.history.push("/cart")}>Cart page</button>
        </div>
    )
}

export default  withStorage(Home);