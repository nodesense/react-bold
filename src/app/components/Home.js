import React, {useState, useEffect} from 'react';

import withStorage from './Storage';

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);
  
    function handleStatusChange(status) {
      setIsOnline(status);
    }
    
    useEffect(() => {
      
      let handle = setInterval(() => {
          console.log('timer running');
        handleStatusChange(Math.ceil(100 * Math.random()) % 2 == 0 ? true: false)
      }, 5000);
      return () => {
        console.log('exit/cleanup/');
        clearInterval(handle);
      };
    });
  
    return isOnline;
  }

// useState for setState of classes, but no merging
// useEffect for dom like did mount, did update, will unmount


const Home = (props) => {
    console.log('Home ', props);
    const [count, setCount] = useState(0);

    // const isOnline = useFriendStatus(1);
    // console.log('isOnline', isOnline)

     // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });

    return (
        <div>
            <h2>Home Page</h2>

            <button onClick={ () => props.history.push("/cart")}>Cart page</button>
        
            <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
{/* 
      <li style={{ color: isOnline ? 'green' : 'black' }}>
     Someone
    </li> */}
        
        </div>
    )
}

export default  withStorage(Home);