// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class CartItem extends PureComponent {
    constructor(props) {
        super(props);
    }

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
                <td>{item.price}</td>
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