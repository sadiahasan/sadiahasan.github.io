import React from 'react';
import './App.css';
import Typewriter from 'typewriter-effect';
import Typist from 'react-typist';
import page2 from './page2';

function App() {
  var i = 0;
  var txt = 'Lorem ipsum dummy text blabla.';
  var speed = 50;



  return (
    <div className="App">
      <header className="App-header">
        <Typist>
          <div className="flex-container">
            <h1 className="header1"> Hello World! </h1>
            <h4 className="header2"> my name is sadia hasan and i'm a software engineer </h4>
          </div>
        </Typist>
      </header>
      {page2}
    </div>
  );
}

export default App;
