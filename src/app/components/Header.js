import React from 'react';
import {NavLink, Link} from 'react-router-dom'; 
import {withRouter} from 'react-router-dom';

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
            <NavLink to="/" className="button" activeClassName="success" exact> Home </NavLink>
            <NavLink to="/cart" className="button" activeClassName="success" > Cart </NavLink>
            <NavLink to="/contact" className="button" activeClassName="success"> Contact </NavLink>
            
            <NavLink to="/redux-counter" 
                     className="button" 
                     activeClassName="success"> Redux Counter </NavLink>

            <NavLink to="/redux-cart" 
                     className="button" 
                     activeClassName="success"> Redux Cart </NavLink>

            
            
            <Link to="/login" > Login </Link>
            <hr />
        </div>
    )
}

// instrument the Header component

export default Header;