import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";



var time = new Date().getHours()
const cssStyle ={}


var greeting = ' ';
if( time>=1 && time<= 12 ){
greeting = "Good morning";
cssStyle.color = 'Green';
}else if(time>=12 && time<= 19){
  greeting = "Good Afternoon";
  cssStyle.color = 'Orange';
}else{
  greeting= "Midnight";
  cssStyle.color = 'Black';
}
ReactDOM.render(
<>
<div className="main">
<p className="head"> Hello sir,<span style={cssStyle}> {greeting} </span></p>
</div>



</>, document.getElementById('root'));

