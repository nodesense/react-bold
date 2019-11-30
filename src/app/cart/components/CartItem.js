import React, {Component} from "react";
import PropTypes from "prop-types";

// inside cart/components/CartItem.js
import ThemeContext from '../../components/ThemeContext';


export default class CartItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            qty: props.item.qty
        }
    }
 
    componentWillReceiveProps(nextProps) {
        this.setState({
            qty: nextProps.item.qty
        })
    }

    componentWillUnmount() {
        console.log("CartItem will unmount");
    }

    //es next
    onChangeText = (e) => {
        // target is input element, real dom element
        let target = e.target;

        this.setState({
            qty: target.value
        })

    }

    componentDidMount() {
        // all refs are resolved
        this.inputElem.focus();

     }
     
    render() {
        console.log("CartItem render", this.props.item.id);
         
        let {item} = this.props;

         
        return (
           
            <tr>
                <td>{item.name}</td>
                <td>
                   {/* in the place of price */}
                   <ThemeContext.Consumer> 
                        { (color) => (
                            <span style={ {color: color} }>{item.price}</span>
                        )}
                    </ThemeContext.Consumer>

                   <p ref="discount"> </p>
                </td>
                <td>
                   <input value={this.state.qty} 
                          type="number"
                          onChange={this.onChangeText}
                          ref = { (elem) => this.inputElem = elem  }
                   />   
                </td>
                <td> {item.price * item.qty} </td>
                <td>
                <button onClick={() => this.props.actions.updateItem(item.id, this.state.qty)}>
                        Update
                    </button>
                    <button onClick={() => this.props.actions.removeItem(item.id)}>
                        Remove
                    </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}