import React from 'react';
import './App.css';
import ClassCDM from './Components/Classe/ClassCDM';
import ClassState from './Components/Classe/ClassState';
import MainCounter from './Components/CountReducer/MainCounter';
import HookContainer from './Components/Hook/HookContainer';
import HooksCounter from './Components/Hook/HooksCounter';
import HooksState from './Components/Hook/HooksState';
import Layout from './Components/Layout/Layout';
import MainProfile from './Components/Profile/MainProfile';
import Todo from './Components/Todo/Todo';

function App () {

  
  return (
    <>
    <Layout/>
      <div className="container">
        <h3>React Hooks <em>UseState</em></h3>
        <div className='actionTest' id='useState'>
          
          <div className='listAction'>
            <ClassState/>
            <HooksState/>
          </div>
          <div className='todoList'>
            <Todo/>
          </div>
        </div>
        <div id='useEffect'>
          <h3>React Hooks <em>UseEffect</em></h3>
          <p><em>useEffect</em></p>
          <ul>
            <li>simple</li>
            <li>Avec nettoyage</li>
            <li>Comme componentDidMount</li>
          </ul>
          <div  className='actionTestS'>
            <ClassCDM/>
            <HooksCounter/>
          </div>
          <div className='containerT'>
            <HookContainer/>
          </div>
        </div>

        <div id='useContext'>
          <h3>React Hooks <em>UseContexr</em></h3>
          <div  className='profileT'>
            <MainProfile/>
          </div>
        </div>

        <div id='useReducer'>
          <h3>React Hooks <em>UseReducer</em></h3>
          <div  className='useReducer'>
            <MainCounter/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
