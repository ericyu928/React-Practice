import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function formatName(user){
  return user.firstName+' '+user.lastName;
}
const user ={
  firstName : 'aaa',
  lastName : 'bbb'
};
// const element = (
//   <div>
//       <h1>
//     Hello,{formatName(user)}
//   </h1>
//   <h2>
//     {user.firstName}
//   </h2>
//   </div>

// );

// const element =(
//   <h1 className='greeting'>
//     test
//   </h1>
// )
const element = React.createElement(
  'h2',
  {className:'greeting'},
  'test123'
)
ReactDOM.render(
  element,
  document.getElementById('root')
);  

function tick(){
  const element =(
    <div>
      <h1>test123</h1>
      <h2>現在是{new Date().toLocaleTimeString()}</h2>
    </div>
  )
  ReactDOM.render(
    element,
    document.getElementById('root')
  )
}
setInterval(tick,1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
