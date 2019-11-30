// PrivateRoute.js
// goes inside app/components/PrivateRoute.js
import React from 'react';
import {connect} from 'react-redux';

import {Redirect} from 'react-router-dom';


function PrivateRoute(props) {
    const ContainedComponent = props.component;
    if (!props.authenticated) {
        return (
            <Redirect to="/login" />
        )
    }

    return (
         <React.Fragment>
              <ContainedComponent />
         </React.Fragment>
    )
}

function mapStateToProps (state) {
    return {
        authenticated: state.auth.authenticated
    }
}
 

export default connect(mapStateToProps, null) (PrivateRoute);