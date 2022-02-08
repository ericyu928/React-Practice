import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//基本架構
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


//兩種Class寫法
//---1
// const element =(
//   <h1 className='greeting'>
//     test
//   </h1>
// )
//---2
const element = React.createElement(
  'h2',
  {className:'greeting'},
  'test123'
)
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );  

//每秒重新建立element
// function tick(){
//   const element =(
//     <div>
//       <h1>test123</h1>
//       <h2>現在是{new Date().toLocaleTimeString()}</h2>
//     </div>
//   )
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   )
// }
// setInterval(tick,1000);

//Component
// function Welcome(props){
//   return '哩後,'+props.name+'  '+props.title
// }
// const element1 =(
// <h1><Welcome title='dog' name='cat'/></h1>
// );
// function Aaa(props){
//   return <h2>早安，{props.name}</h2>
// }
// const element1=<Aaa name='puppy'/>

// function Bbb(ppa){
//   return <h1>午安，{ppa.name}</h1>
// }
// function MuiltComponent(){
//   return (
//     <div>
//       <Bbb name='阿貓'/>
//       <Bbb name='阿狗'/>
//       <Bbb name='阿貓狗'/>
//     </div>
//   );
// }

// ReactDOM.render(
//   <MuiltComponent />,
//   document.getElementById('root')
// )

//state

// function Clock(props){
//   return (
//     <div>
//      <h1>test123</h1>      
//       <h2>現在是{props.date.toLocaleTimeString()}</h2>
//     </div>
//   )
// }
// function tick(){
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }
// setInterval(tick,1000)

//轉換 Function 成 Class
// class Clock extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={date:new Date()}
//   }
  
//   componentDidMount(){ //設定timer
//     this.timerID = setInterval(
//       () => this.tick(),1000
//      );
//   }
//   componentWillUnmount(){ //移除timer
//     clearInterval(this.timerID);
//   }

//   tick(){
//     this.setState({
//       date: new Date()
//     });
//   }

//   render(){
//     return(
//       <div>
//         <h2>現在是 {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     )
//   }
// }
// class Toggle extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {isToggleOn : true};

//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(){
//     this.setState(prevState =>({
//       isToggleOn: !prevState.isToggleOn,
//     }));
//   }
//   render(){
//     return(
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON1' : 'OFF2'}
//       </button>
//     );
//   }
// }
// function Abc(){
//   return(
//     <div>
//         <Clock />
//         <Clock />
//         <Clock />
//         <Toggle />
//     </div>
//   )
// }
// ReactDOM.render(
//   <Abc />,
//   // <Toggle />,
//   document.getElementById('root')
// );

//條件Render
// function UserGreeting(props){
//   return <h1>Welcome Back</h1>;
// }
// function GuestGreeting(props){
//   return <h1> Please login in</h1>
// }
// function Greeting(props){
//   const isLoggedin=props.isLoggedin;
//   if(isLoggedin){
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }
// function LoginButton(props){
//   return(
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   )
// }
// function LogoutButton(props){
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   )
// }
// class LoginControl extends React.Component{
//   constructor(props){
//     super(props);
//     this.LoginClick = this.LoginClick.bind(this);
//     this.LogoutClick = this.LogoutClick.bind(this);
//     this.state = {isLoggedIn : false}
//   }

//   LoginClick(){
//     this.setState({isLoggedIn : true});
//   }
//   LogoutClick(){
//     this.setState({isLoggedIn : false});
//   }
//   render(){
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if(isLoggedIn){
//       button = <LogoutButton onClick={this.LogoutClick} />;
//     }
//     else{
//       button = <LoginButton onClick={this.LoginClick} />;
//     }
//     return(
//       <div>
//         <Greeting isLoggedin={isLoggedIn} />
//         {button}
//       </div>
//     )
//   }
// }
// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// )

//arraylist
function NumberList(props){
  const numbers = props.numbers;
  const list = numbers.map((number)=>
  <li key={number.toString()}>
    {number+4}
  </li>
  );
  return(
    <ul>{list}</ul>
  )
}
const numbers=[1,3,5,7,9];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
