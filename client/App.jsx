import React from "react";
import ReactDOM from "react-dom";
import "@styles/Title.scss";

const App=()=>{
    return(
        <div className="title"><p className="text">Hello!</p></div>
    )
}
ReactDOM.render(<App />, document.querySelector("#app"));
