import React from "react";

function Block(props) {

    const [borderColor, setBorderColor] = React.useState(props.borderColor);
    const [backColor, setBackColor] = React.useState(props.backColor);

    const style = {
        height:"100px",
        width:"100px",
        border: "2px solid",
        borderColor: borderColor,
        backgroundColor: backColor
    };

    return (
        <div style={style}/>
    )

}

export default Block