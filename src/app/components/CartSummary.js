// CartSummary.js
import React, {Component} from "react";
import PropTypes from "prop-types";

//TODO: PropTypes

// TODO: PureComponent
 class CartSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            discount: 0,
            grandTotal: 0
        }
    }
 
    //TODO: componentWillMount
    // during creation time, only once
    UNSAFE_componentWillMount() {
        this.recalculate(this.props);
    }

    //TODO: componentWillReceiveProps, recalculate 
    // whenever parent render called on update cycle, called many times
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('cart summary will receive props', this.props, nextProps);
        this.recalculate(nextProps);
    }
 
    //TODO: shouldComponentUpdate

    recalculate(props) {
        let discount = 0;

        if (props.count >= 10) {
            discount = 20;
        } else if (props.count >= 5) {
            discount = 10;
        }

        let grandTotal = props.amount - (props.amount * discount / 100);

        this.setState({
            discount, 
            grandTotal
        })
    }
     
    // invoked when, during creation cycle
    // this.setState, this.forceUpdate
    // whenever parent component render called
    render() {
        console.log("CartSummary Render");
        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount : {this.props.amount} </p>
            <p> Count : {this.props.count} </p>

            <p> Discount: {this.state.discount} %</p>
            <p> Grand Total: {this.state.grandTotal} </p>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}

export default CartSummary;