// ref - access to real dom
// input elements

import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: 'Krish',
            lastname: '',
            state: ''
        }

        // to get access to real dom within react component
        this.firstnameRef = React.createRef();
    }

    handleChange = (e) => {
        const {name, value} = e.target; // target is real DOM (input elmment etc)
        console.log(name, value); // name is a fieldname
        this.setState({
            [name]: value
        })
    }

    // creation cycle
    componentDidMount() {
        // access to real dom apis
        //.current real dom object, input tag
        this.firstnameRef.current.focus();
        this.firstnameRef.current.select();

        document.getElementById("copyrights").textContent = 'hacked';
    }

    // update cycle
    componentDidUpdate() {
       // this.firstnameRef.current.select();
    }

    render() {
        console.log('Contact render called');
        return (
            <div> 
                <form>
                    First Name
                    <input name="firstname" type="text"
                           value={this.state.firstname}
                           onChange={this.handleChange}
                           ref={this.firstnameRef}
                    />
                </form>
            </div>
        )
    }
}

export default Contact;