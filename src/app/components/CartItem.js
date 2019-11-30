// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

// app/components/CartItem.js
import ThemeContext from './ThemeContext';

class CartItem extends PureComponent {
    constructor(props) {
        super(props);
    }

    // this enable this.context attributes, that value 
    static contextType = ThemeContext;

    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty
   
    componentWillUnmount() {
        console.log('CartItem componentWillUnmount', this.props.item)
    }

    removeItem = (e) => {
         this.props.removeItem(this.props.item.id) 
    }

    render() {
        let {item} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name} </td>
                <td>
                   <span style={ {color: this.context}}>{item.price}</span>
                </td>
                <td>{item.qty}</td>
                <td>{item.price * item.qty}</td>
                <td> 
                <button onClick={() => {} }>
                        +1
                </button>    

                <button onClick={ () => {} }>
                        -1
                </button>    
                <button onClick={this.removeItem}>
                        X
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

export default CartItem;