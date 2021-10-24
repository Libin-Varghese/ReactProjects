import React from "react";
import ReactDom from "react-dom";

function Greetings() {
  return (
    //React Fragment <> or <React Fragment>
    //An alternative for using JSX is by calling React.createElement('h2',{props},'Hello')
    <>
      <div>
        <h2>Hello World</h2>
        <a href="#">Hello World</a>
      </div>
      <h4>This is my first component </h4>
    </>
  );
}

ReactDom.render(<Greetings />, document.getElementById("root"));
