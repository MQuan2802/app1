import React from "react";

export let MySquare = (props) => {
    return(
        <button onClick = {props.onClick}
            style = {{
                background: "#fff",
                border: "2px solid #000000",
                float: "left",
                fontSize: "24px",
                fontWeight: "bold",
                lineHeight: "34px",
                height: "34px",
                marginRight: "-1px",
                marginTop: "-1px",
                padding: "0",
                textAlign: "center",
                width: "34px"
            }}
        >
          {props.value}
        </button>

    ) 
};