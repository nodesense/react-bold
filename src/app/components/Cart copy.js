// Cart.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

class Cart extends Component {
    static defaultProps = {
    
    }

    static propTypes = {
    
    }
    
    constructor(props) {
        super(props);

        this.state = {
            items: [ 
            			{id: 1, name: 'P1', price: 100, qty: 5}
            	   ],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
    }
    
    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        //TODO:
        this.setState( (state) => {
            const items = [...state.items, item];
           // this.recalculate(items);
           let count = 0, 
           amount = 0;

           for (let item of items) {
               amount += item.price * item.qty;
               count += item.qty;
           }
           

            return {
                items,
                amount, 
                count
            }
        })
    }
    
    removeItem = (id) => {
        //TODO
        console.log('removeItem ', id);
        this.setState( (state) => {
            const items = state.items.filter( item => item.id !== id);
            // this.recalculate(items); //TODO:
            let count = 0, 
            amount = 0;

            for (let item of items) {
                amount += item.price * item.qty;
                count += item.qty;
            }
            
            return {
                items,
                amount, 
                count
            }
        })
    }

    updateItem = (id, qty) => {
        //TODO
        // two refs need to take care
        // items array
        // object inside the array
    }

    empty = () => {
        //TODO
         this.setState( (state) => {
             return {
                 items: []
             }
         })
    }

    //dummy
    refresh = () => {
        this.setState({
            flag: true
        })
    }

    // derived data from state
    recalculate(items) {
        let count = 0, 
            amount = 0;

        for (let item of items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        this.setState({
            amount,
            count
        })
    }

    //TODO:
    //componentWillMount
    UNSAFE_componentWillMount() {
        console.log('Cart componentWillMount');
        this.recalculate(this.state.items);
    }
    
    
    render() {
        console.log("Cart render")
        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={this.addItem}>
                Add Item
            </button>


            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.refresh}>
                Refresh
            </button>
            
            <CartList  items={this.state.items}  
                       removeItem={this.removeItem}
            />

            <CartSummary amount={this.state.amount}
                         count = {this.state.count}
            />

            </div>
        )
    }
} 




export default Cart;