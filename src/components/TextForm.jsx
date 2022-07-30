import React, { useState } from 'react';
export default function TextForm(props) {
    const [click, clickText] = useState(0);
    function handleUpClick() {
        setText(text.toUpperCase());
    }
    function handleChange(e) {
        setText(e.target.value);

    }
    function handleDownClick(e) {
        setText(text.toLowerCase());

    }
    function empityText(e) {

        if (click === 0) {
            setText("");
            clickText(1);

        }


    }

    function clearText() {
        setText("");
    }


    const [text, setText] = useState("Hi write something");
    return (
        <>
            <div>
                <h3>Enter the text for analyse</h3>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">{props.textHeading}</label>
                    <textarea className="form-control" onChange={handleChange} onClick={empityText} value={text} id="myBox" rows="6">{text}</textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleUpClick} >Convert to uppercase</button>
                <button type="button" className="btn btn-info mx-4" onClick={handleDownClick}>Convert to uppercase</button>
                <button type="button" className="btn btn-info mx-4" onClick={clearText}> Clear Text </button>
            </div>
            <div className="container my-4">

                <h3 className="my-2">Your Text Summary</h3>
                <p className="my-2">{text.length} Charactor and {text.split(" ").length} Word</p>
                <p className="my-2"> {0.008 * text.split(" ").length} Minut Read time</p>

                <h3 className="my-2">Preview</h3>
                <p className="my-2">{text}</p>
            </div>
        </>
    )
}

