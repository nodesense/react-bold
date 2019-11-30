import React, {useState, useEffect} from 'react';

// useState similar to class component state, setState methods
// useEffect is for accessing DOM functionalities in functional comp
// componentDidMount, willUnmount, componentDidUpdate
const Home = (props) => {
    console.log('Home ', props);
    
    //useState(0) returns array [0, setter func]
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("red");

     useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
     });

    return (
        <div>
            <h2>Home Page</h2>

            <h2>Count {count}</h2>
            <button onClick={() => setCount(count + 1)}> +1 </button>
            <button onClick={() => setCount(0)}> Reset </button>

            <button onClick={ () => props.history.push("/cart")}>Cart page</button>
        
              
        
        </div>
    )
}

export default   Home;