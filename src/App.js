import React from 'react';
import './App.css';
import Typewriter from 'typewriter-effect';
import Typist from 'react-typist';
import Weather from './Weather';
import Info from './Info';
import Music from './Music';

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
            <h4 className="header2"> my name is sadia hasan and i'm a software developer </h4>
          </div>
        </Typist>
        </header>
      <div className="yo"> 
      <Info/>
      <Weather/>
      <Music/>
      <Music/>

      
      </div>
    </div>
  );
}

export default App;
