import { useState } from "react";
import React from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    // console.log("Uppercase is click"+text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoclick = () => {
    // console.log("Uppercase is click"+text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };
  //inverse function
  const handleReverse = () => {
    let splitString = text.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    setText(joinArray);
  };

  const headleOnchange = (event) => {
    console.log("on change");
    console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text="newtwxt"; // wrong way update text
  // setText("new text");

  return (
    <>
      <div
        className="container"
        style={{
          
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={headleOnchange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="exampleFormControlTextarea1"
            rows="7"
          ></textarea>
        </div>
        <button className=" btn-primary mx-2 " onClick={handleUpclick}>
          Convert to uppar case
        </button>
        <button className=" btn-primary mx-2" onClick={handleLoclick}>
          Convert to lowwer case
        </button>
        <button className=" btn-primary mx-2" onClick={handleClear}>
          Clear all text
        </button>
        <button className=" btn-primary mx-2" onClick={handleReverse}>
          inverse text
        </button>
      </div>
      <div
        className="container my-4 "
        style={{ backgroundColor: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h1>Perivew Text</h1>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
        {/* <h4>Thank you 😄</h4> */}
      </div>
    </>
  );
}
