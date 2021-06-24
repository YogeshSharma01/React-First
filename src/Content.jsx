import React from 'react';


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
function Content(){
    return (
        <>
            <div className="main">
            <p className="head"> Hello sir,<span style={cssStyle}> {greeting} </span></p>
            </div>
        </>
    )
}

export default Content;