import React, {useState, useEffect} from 'react';
import './style.css';

const TextBox = ({id, title, value, onChangeHandler}) => {
    const [text, setText] = useState("");

    useEffect(()=>{
        setText(value[id]);
    },[value]);

  return (       
        <div>
          <input className="input_text" id={id} name={id} type="text" placeholder={title} value={text} onChange={(e)=>onChangeHandler(e.target.id,e.target.value)} />
        </div>
  );
};

export default TextBox;
