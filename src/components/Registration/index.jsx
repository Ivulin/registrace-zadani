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

    useEffect(()=>{
        console.log(usr);
      },[usr]);

    const onhandleChange = (id,value) => {
        let newUser= { ...usr,[id]: value };
        setUsr(newUser);         
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(emailValidation(usr.email) && passwordValidation(usr.password,usr.passwordConfirm))
        {      
            let usrName = usr.username ? usr.username : getUser(usr.email);
            onhandleChange('username', usrName);
        }
        else{
            setUsr({
                username: '',
                email: '',
                password: '',
                passwordConfirm: '',
            });
        }
    }

    const emailValidation = (email) => {
        if(email.indexOf("@") < 1){
            setErrorMessage("Formát emailu není správná.");
            return false;
        };
        return true;
    }

   const passwordValidation = (pswd, psdwConfirm) =>{
    if(pswd != psdwConfirm){
        setErrorMessage("Zadaná hesla nejsou shodná");
        return false;
    };
    return true;
   }

   const getUser = (email) => {
        return email.substring(0,email.indexOf('@'));
   }



  return (   
    <div className="registration_form">       
        <form onSubmit={handleSubmit}>
            <TextBox id="email" title={INITIAL_LIST.email} value={usr} onChangeHandler={onhandleChange}/>
            <TextBox id="username" title={INITIAL_LIST.username} value={usr} onChangeHandler={onhandleChange}/>
            <TextBox id="password" title={INITIAL_LIST.password} value={usr} onChangeHandler={onhandleChange}/>
            <TextBox id="passwordConfirm" title={INITIAL_LIST.passwordConfirm} value={usr} onChangeHandler={onhandleChange}/>
            {errorMessage ? <div>{errorMessage}</div> : null}
            <button className='submit_btn' type="submit">REGISTRATION</button>
        </form>
    </div>
  );
};

export default Registration;
