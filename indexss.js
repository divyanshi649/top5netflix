//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

//ReactDOM.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>,
  //document.getElementById('root')
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const name="sinu";
const myname="diyu";
const curdate=new Date().toLocaleDateString();
const curtime=new Date().toLocaleTimeString();
const img1="https://picsum.photos/200/300";
const img2 ="https://picsum.photos/250/300";
const img3 ="https://picsum.photos/300/300";
const heading={
  color:"white",
  textAlign:"center",
  textTransform:"capitalize",
};

ReactDOM.render(
  <>
  <h1 style={heading}>Hello dhoru</h1>
  <p className="pp">Today at date {curdate} and {curtime} i accept that</p>
<h2 className="para">i love you {name}</h2>
<ol className="list">
  <li>my dhor</li>
  <li>my bewakof</li>
  <li>my gnde-snde</li>
  <li>my nautanki</li>
  <li>my fav</li>
</ol>
<div className="img">
<img src={img1} alt="random"/>
<img src={img2} alt="random"/>
<img src={img3} alt="random"/>
</div>
</>,
document.getElementById("root"));