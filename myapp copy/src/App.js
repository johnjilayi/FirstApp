import logo from './logo.svg';
import './App.css';
import React from 'react';
import Activity1 from './Activity1';
import { render } from '@testing-library/react';
import Activity2 from './Activity2';

function calculate() {
return 5+5;
}

function formatName(user) {


}

function your_name() {
  return "Jon"
}

function datess() {
  return Activity2;
}

function dates() {
  return Date().toDateString();
}



const user = {
  firstname : "jon",
  lastname : "Jons",
}


function getGreatingd(user) {
  if (user) {
    return <h>sorry is {calculate()} times better then JSX</h>
  }
  return <h>sorry is {calculate()} times better then JSX</h>
}

function render() {
  return (
    <div className='App'>
          <Activity2 />
    </div>
  );
}

// class App extends React.Component {
// constructor()  { user: {
//   firstname : "sam",
//   lastname : "smith",
// }}


// ShadowRoot.render() {
//   Activity2()
// }

function App() {
  return (
    <div className="App">

<h>Hello {your_name()} </h>
<h>Hello {datess()} </h>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


    </div>
  );
}

export default App;
