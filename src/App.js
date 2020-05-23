import React from 'react';
import logo from './logo.svg';
import './App.css';

// component
// cách 1
function One()
{
  return (
    <div> 
       <div> Số 1</div>
    </div>
   
  )
}

// cách 2 
var Two = function(){
  return (
    <div> 
       <div>số 2</div>
    </div>
   
  )
}

// cách 3: arrow function
var Three = () => (
    <div> 
       <div>số 3</div>
    </div>
)

// cách 4: kiểu class: gõ chữ rcjc

class Four extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

// props
// cách 1 dùng hàm
function NumberOne(props)
{
  return (
    <div>
        <div className="card text-left">
          <img className="card-img-top" src="http://placehold.it/200x200" alt="" />
          <div className="card-body">
            <h4 className="card-title">{props.tieude}</h4>
            <p className="card-text">Body</p>
          </div>
        </div>
      </div>
  )
}

// cạc 2 dùng class
class NumerTwo extends React.Component {
  render() {
    return (
      <div>
      <div className="card text-left">
        <img className="card-img-top" src="http://placehold.it/200x200" alt="" />
        <div className="card-body">
          <h4 className="card-title">{this.props.tieude}</h4>
          <p className="card-text">Body</p>
        </div>
      </div>
    </div>
    );
  }
}

// ví dụ về hàm map
const so = [1,2,3,4,5];
const so2 = so.map((x) => x*2 + ',');
const so3 = so.map((x) => (

    <li>Số:{x}</li>

));
class Number3 extends React.Component {
  render() {
    return (
      <div>
          {so3}
      </div>
    );
  }
}



//
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <One/>
        <One> </One>
        <Two/>
        <Three/>
        <Four/>
        <NumberOne tieude="Anh Toàn"></NumberOne>
        <NumerTwo tieude = "Thục Anh"/>
        <Number3/>
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
      </header>
    </div>
  );
}

export default App;
