import React, {useState} from 'react'

export default function (props) {

  return (
        <>
        <div className="container" style = {props.myStyle}>
            <h1 className = "my-3">About</h1>
        <div className="accordion" id="accordionExample" style = {props.myStyle}>
    <div className="accordion-item" style = {props.myStyle}>
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style = {props.myStyle}>
        <strong>Text Utils</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">
           Text Utils is a simple website that has the functionality of converting characters from UpperCase to LowerCase and vice versa . It is also capable of removing unwanted spaces in the text along with copy to clipboard functionality.
        </div>
        </div>
    </div>
    <div className="accordion-item" style = {props.myStyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style = {props.myStyle}>
            <strong>Convert to Uppercase</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            Any words or sentences the users inputs in the text area, the "Convert to UpperCase" button automatically converts the words or the sentences to the UpperCase.
        </div>
        </div>
    </div>
    <div className="accordion-item" style = {props.myStyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style = {props.myStyle}>
        <strong>Convert to Lowercase</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Any words or sentences the users inputs in the text area, the "Convert to LowerCase" button automatically converts the words or the sentences to the UpperCase.
        </div>
        </div>
    </div>
    </div>
    </div>
        </>
  )
}
