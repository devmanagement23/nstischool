// import React from 'react'
import React,{useState} from 'react'



export default function TextFormComponent(props) {
  
  const handleUppClick =()=>{
    console.log('uppercase was clicked ' + text);
    
    //setText("You have clicked on handleUppClick")

    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLowerClick =()=>{
    console.log('lowercase button was clicked' + text);

    let newText2 = text.toLowerCase();
    setText(newText2);

    
  }
 
  /* 
  const handleOnChange =()=>{
    console.log('On change');
  }
 */
  
  const handleOnChange =(event)=>{
    console.log('On change');
    setText(event.target.value);
  }


  const [text,setText] = useState('')
  //const [text,setText] = useState('Enter text here')   // = returning array
  //text is variable             //enter text is value of variable 'text'
  //setText is function()  , this function used to update the value of variable 'text'
  //example  if i call setText("hello world")   then  text value change to 'hello world'
  // if we directly try to change value then it give error. text = 'hello world'  --> give ERROR
  
  return (
        <>
          <div>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Form</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>

            <button className="btn btn-primary" onClick={handleUppClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-5" onClick={handleLowerClick}>Convert to Lowercase</button>                      
          </div>

          <div className="container my-3" >
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008 * (text.split(" ").length)} minutes take to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
          </div>
          



        </>
    )
}
