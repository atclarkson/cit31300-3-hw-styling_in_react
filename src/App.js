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

        <Block borderColor={"black"} backColor={"white"}/>
        <Block borderColor={"yellow"} backColor={"blue"}/>
        <Block borderColor={"red"} backColor={"green"}/>

    </div>
  );
}

export default App;
