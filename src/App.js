import React,{ Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet'
import Welcome from './component/Welcome'
import Hello from './component/Hello'
import Message from './component/Message'
import FunctionClick from './component/FunctionClick'
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';


class App extends Component{
  render(){
    return(
      <div className="App">
        
        {/* <Greet name="Bruce" heroName="Batman"><p>This is children props</p></Greet>
        <Greet name="Clark" heroName="Superman"> <button>Action</button></Greet>
        <Greet  name="Diane" heroName="Wonderwoman"/> */}
{/* 
        <Welcome name="Bruce" heroName="Batman"></Welcome>
        <Welcome name="Clark" heroName="Superman"></Welcome>
        <Welcome  name="Diane" heroName="Wonderwoman"/> */}

        {/* <Hello/> */}

        
        {/* <Message/> */}
{/* 
        <FunctionClick/>
        <ClassClick/> */}

        <EventBind/>


        </div>
    )
  }
}
export default App;


