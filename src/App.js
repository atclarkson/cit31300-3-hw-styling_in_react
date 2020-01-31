import React from 'react';
import './css/style.css';
import Rectangle from "./component/Rectangle";
import Block from "./component/Block";

function App() {
  return (
    <div className="App">
        <Rectangle/>
        <Rectangle/>
        <Rectangle/>

        <Block borderColor={"black"} backColor={"white"} clicky={false}/>
        <Block borderColor={"yellow"} backColor={"blue"} clicky={false}/>
        <Block borderColor={"red"} backColor={"green"} clicky={false}/>
        <Block borderColor={"red"} backColor={"blue"} clicky={true}/>
        <Block borderColor={"red"} backColor={"blue"} clicky={true}/>
        <Block borderColor={"red"} backColor={"blue"} clicky={true}/>
    </div>
  );
}

export default App;
