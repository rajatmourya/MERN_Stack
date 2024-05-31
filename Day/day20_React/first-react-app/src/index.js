import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Card from './Components/Card';
import Avatar from './Components/Avatar';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const name = 78;

// // border-radius:20px -> borderRadius:'20px';

// const headingStyle = {
//     backgroundColor: 'Red',
//     padding: '20px',
//     border: '10px solid green'
// }

// const sayHi = true;

// let subHeading = ' ';

// if (sayHi) {
//     subHeading = 'Hi';
// }else {
//     subHeading = 'Bye';
// }

// const myVar = (<div>
//     {/* <h2 style={{backgroundColor:'Red'}} className='heading'>Hello I am in JSX Calculat {name}</h2> */}
//     <h2 style={headingStyle} className='heading'>Hello I am in JSX Calculat {name}</h2>
//     {/* <p className='subheading'>{sayHi ? "Hi" : "Bye"}</p> */}
//     <p className='subheading'>{subHeading}</p>
// </div>);

// function myClock() {
//     root.render (
//         <div>
//             <p style={{fontSize: '4rem'}}>{new Date().toLocaleTimeString()}</p>
//             <h2> This will not be re-rendered</h2>
//         </div>
//     );
    
//     setTimeout(myClock,1000);
    
// }

// myClock();


// root.render(myVar);






root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>
//     }
// }

// function Welcomes(props) {
//     return <h1>Hello, {props.name}</h1>
// }

// const myName = "Rajat Mourya";


