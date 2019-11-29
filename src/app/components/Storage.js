import React from 'react';

class Storage extends React.Component {
     constructor(props) {
         super(props);
     }

     render() {
         const Component = this.props.component;

         const storage = {
             setItem: window.localStorage.setItem,
             removeItem: window.localStorage.removeItem
         }

         return (
             <React.Fragment>
                <Component {...storage} {...this.props} />
             </React.Fragment>
         )
     }
}

function withStorage(componentClass) {
    return function component(props) {
        return (
            <Storage component={componentClass} {...props} />
        )
    }
} 

export default withStorage;