import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");
  // text="mnjn" //wrong way to change
  const handleClick = () => {
    // console.log("uper case is clicked" + text);
    let newTxt = text.toUpperCase();
    setText(newTxt);
    props.showAlert("Converted to Uppercase","info");
  };
  const handleLoClick = () => {
    // console.log("uper case is clicked" + text);
    let newTxt = text.toLowerCase();
    setText(newTxt);
    props.showAlert("Converted to LowerCase","info");
  };
  const handleOnChange = (e) => {
    // console.log("Done 2 Bro");

    setText(e.target.value);
  };
  const handleClear = () => {
    
    let newTxt = ''
    setText(newTxt);
  };
  return (
      <>
    <div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
          <br />
          <h2 > {props.heading}- </h2>
          <label htmlFor="myBox" className="form-label">
            Analize
          </label>
          <textarea
          style={{backgroundColor:props.mode==='dark'?'lightgrey':'white'}}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="3"
            
          ></textarea>
        </div>
        <button style={{color:props.mode==='dark'?'white':'dark'}}onClick={handleClick} className="btn btn-primary mx-2">
          Convert To UpperCase
        </button>
        <button onClick={handleLoClick} className="btn btn-primary mx-2">
          Convert To LowerCase
        </button>
        <button onClick={handleClear} className="btn btn-primary mx-2">
          Clear
        </button>
      </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h2>PreView </h2>
        <h6>{text.length>0?text:'Enter the Text Something'}</h6>

    </div>
    </>
  );
}

