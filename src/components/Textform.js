import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = () => {
        let upperText = text.toUpperCase();
        setText (upperText);
    }
    const handleLoClick = () => {
        let lowerText = text.toLowerCase();
        setText (lowerText);
    }
    const handleClClick = () => {
        let clearText = "";
        setText (clearText);
    }
    const handleCoClick = () => {
      let copyText = document.getElementById('myBox');
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
      props.showAlert("Text copied to clipboard !", "success")
    }
    const handleSpClick = () => {
      let spaceText = text.split(" ").filter((character) => character !== "").join(" ");
      setText(spaceText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');

  return (
    <>
    <div className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`} >
    <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className={`form-control text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="myBox" onChange={handleOnChange} rows="8" value = {text} style={{backgroundColor : props.mode === 'dark' ? '#6b6565' : 'white'}}></textarea>
  </div>
  <button  disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick = {handleUpClick}>Convert to Uppercase</button>
  <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick = {handleLoClick}>Convert to Lowercase</button>
  <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick = {handleSpClick}>Remove extra spaces</button>
  <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick = {handleCoClick}>Copy Text</button>
  <button disabled = {text.length === 0} className="btn btn-danger mx-2 my-1" onClick = {handleClClick}>Clear Text</button>
  
  </div>
  <div className={`container mx-2 my-4 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
    <h2>Text Summary:</h2>
    <p>Words: {text.split(" ").filter((character) => character !== "").length} Characters: {text.length}</p>
    <p>Time to read: {0.008*text.split(" ").filter((character) => character !== "").length} s</p>
  </div>
  </>
  )
}
