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
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import Stylesheet from './component/Stylesheet';
import Inline from './component/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './component/Form'
import LifecycleA from './component/LifecycleA';
import FragmentDemo from './component/FragmentDemo';
import Table from './component/Table';
import ParentComp from './component/ParentComp';

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

        {/* <EventBind/> */}
        {/* <ParentComponent/> */}
        {/* <UserGreeting/> */}
        {/* <NameList/> */}
        {/* <Stylesheet primary={true}/> */}
          {/* <Inline/>
          <h1 className='error'>Error</h1>
           <h1 className={styles.success}>Success</h1> */}
          {/* <Form/> */}
          {/* <LifecycleA/> */}
          {/* <FragmentDemo/> */}
          {/* <Table/> */}
          <ParentComp/>
          


        </div>
    )
  }
}
export default App;


