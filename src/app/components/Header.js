import React from 'react';
 

// first argument always props for functional comp
// props are immutable
function Header(props) {

    
    console.log('Header called');
    // WRONG
    // props.title = 'react';
    // deconstruct/destructuring
    const {title} = props; // title = props.title
    return (
        <div>
            <h2>{title}</h2>
            {/* comments inside JSX
                navigation here
            */}
            <hr />
        </div>
    )
}

// instrument the Header component

export default Header;