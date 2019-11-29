// CartList.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

 //TODO: PureComponent

 class CartList extends Component {
    constructor(props) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate
    // called before calling render on update cycle
    // this.forceUpdate shall not call shouldComponentUpdate
    // this.setState shall go through  shouldComponentUpdate 
    shouldComponentUpdate(prevProps, prevState) {
        if (prevProps.items !== this.props.items) {
            return true;
        }
        return false;
        // return true; // render shall be called
        // false, no render call
    }
    
    render() {
        console.log("CartList Render");

        let {items} = this.props;

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem */ }

                    {
                        items.map (item => (
                            <CartItem item={item}
                                       removeItem={this.props.removeItem}   
                            key={item.id} />
                        ))
                    }

                </tbody>
            </table>
            </div>
        )
    }
} 

CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}

export default CartList;