import React, {useEffect, useState} from 'react';
import TextBox from '../TextBox/index';
import './style.css';

const INITIAL_LIST = {
    username: 'User name',
    email: 'Email Adress',
    password: 'Password',
    passwordConfirm: "Confirm password"
}

const INIT_OBJ = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
 }

const Registration = () => {
    const [usr, setUsr] = useState(INIT_OBJ);

    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (id,value) => {
        let newUser= { ...usr,[id]: value };
        setUsr(newUser);         
      };

    const handleSubmit = (event,user) => {
        event.preventDefault();
        if (emailValidation(user.email)) {      
            user.username = user.username ? user.username : computeUser(user.email);
            setUsr(user);  
        }
        passwordValidation(user.password,user.passwordConfirm);

        console.log(user);
    }

    const emailValidation = (email) => {
        if (email.indexOf("@") < 1){
            setErrorMessage("Formát emailu není správná.");
            return false;
        };
        return true;
    }

   const passwordValidation = (pswd, psdwConfirm) =>{
    if (pswd != psdwConfirm){
        setErrorMessage("Zadaná hesla nejsou shodná");
        return false;
    };
    return true;
   }

   const computeUser = (email) => {
        return email.substring(0,email.indexOf('@'));
   }



  return (   
    <div className="registration_form">       
        <form onSubmit={(e)=>handleSubmit(e,usr)}>
            <TextBox id="email" title={INITIAL_LIST.email} value={usr.email} onChangeHandler={handleChange}/>
            <TextBox id="username" title={INITIAL_LIST.username} value={usr.username} onChangeHandler={handleChange}/>
            <TextBox id="password" title={INITIAL_LIST.password} value={usr.password} onChangeHandler={handleChange}/>
            <TextBox id="passwordConfirm" title={INITIAL_LIST.passwordConfirm} value={usr.passwordConfirm} onChangeHandler={handleChange}/>
            {errorMessage ? <div>{errorMessage}</div> : null}
            <button className='submit_btn' type="submit">REGISTRATION</button>
        </form>
    </div>
  );
};

export default Registration;
