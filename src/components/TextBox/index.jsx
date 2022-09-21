import React, {useState, useEffect} from 'react';
import './style.css';

const TextBox = ({id, title, value, onChangeHandler}) => {
    const [text, setText] = useState(value[id] == "" ? title : value[id]);

    const onFocusHanlder = (e)=>{
      console.log(e.target.value);
        if(e.target.value == title)
        {
          setText('');
          onChangeHandler(e.target.id,'')
        }
          
    };

    const onBlurHanlder = (e)=>{
      if(e.target.value == "")
      {
        setText(title);
        onChangeHandler(e.target.id,'');
      }
    };

    const onChangeClick = (e) =>{
      if(e.target.value != title && e.target.value!="")
        onChangeHandler(id,e.target.value)
    }

    useEffect(()=>{
      if(text!=value[id])
        setText(value[id] == "" ? title : value[id]);
    },[value]);

  return (       
        <div>
          <input className="input_text" id={id} name={id} type="text" value={text} onChange={onChangeClick} onFocus={onFocusHanlder} onBlur={onBlurHanlder}/>
        </div>
  );
};

export default TextBox;
