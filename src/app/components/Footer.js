import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import withStorage from './Storage';

import ThemeContext from './ThemeContext';

// FIXME: Nested children and array access for children
// props.children works.

// props destructured into year and title
// content children avaiable as props.children
// reac keyword children, an array
const Footer = (props) => {
    let {year, title, history, children} = props
    console.log('Footer called', props);
    const result = false;

    return (
        <div>
            <hr />
            {children}
            <p id="copyrights">Copyrights@{year}, {title}</p>           
            <p >result is {result.toString()}</p>

            <button onClick={ () =>  history.push("/cart")}>Cart page</button>

            <ThemeContext.Consumer> 
                { (color) => (
                    <span style={ {color: color} }>The Theme Color {color}</span>
                )}
            </ThemeContext.Consumer>
        </div>
    )
}

// defaultProps is react keyword
Footer.defaultProps = {
    year : 2019 // used when parent doesn't pass year prop
}

// react keyword propTypes 
// for data type validation, data validation
Footer.propTypes = {
    title: PropTypes.string.isRequired, // mandatory
    year: PropTypes.number, //optional
}


// Footer.contextType = ThemeContext;
// higher order component
//const WrappedFooter = withRouter(Footer);
// export default WrappedFooter;

export default   withStorage(withRouter(Footer));