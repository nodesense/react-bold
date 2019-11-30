import React from 'react';
import {connect} from 'react-redux';

function Login(props) {
    return (
        <div>
           {!props.authenticated && 
            <button onClick={props.login}> Login </button>
           }
          { props.authenticated && 
            <button onClick={props.logout}> Logout </button>
          }
        </div>
    )
}

function mapStateToProps (state) {
    return {
        authenticated: state.auth.authenticated
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: () => {
            dispatch({type: 'LOGGED_IN'});
        },
        logout: () => {
            dispatch({type: 'LOGGED_OUT'});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Login);