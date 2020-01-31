import React from "react";

function Block(props) {

    const [borderColor, setBorderColor] = React.useState(props.borderColor);
    const [backColor, setBackColor] = React.useState(props.backColor);

    const [itr, setItr] = React.useState(0);

    const changeColor = ()=> {
        switch (itr) {
            case 0:
                setBackColor("red");
                setBorderColor("blue");
                setItr(1);
                break;
            case 1:
                setBackColor("blue");
                setBorderColor("green");
                setItr(2);
                break;
            case 2:
                setBackColor("green");
                setBorderColor("red");
                setItr(0);
                break;
            default:
                break;
        }
    }

    const style = {
        height:"100px",
        width:"100px",
        border: "2px solid",
        borderColor: borderColor,
        backgroundColor: backColor
    };

    return (
        <div style={style} onClick={props.clicky ? changeColor : ""}/>
    )

}

export default Block