import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleCleanClick = (event) => {
    let newText = '';
    setText(newText);
  }

  const [text, setText] = useState('');

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
        </div>
        {/* mx use to give margin btw two button */}
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCleanClick}>Clear</button>
      </div>
      <div className="container my-3">
        <h2> Your text Message</h2>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(" ").length} </b>read per sec</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
