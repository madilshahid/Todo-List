import React, {useState,useEffect} from 'react'
import { signInWithEmailAndPassword,
    onAuthStateChanged,
    createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";
import TodoSVG from '../assets/pic.svg' 

export default function Welcome() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate();
    const [isRegistering, setIsRegistering] = useState(false);

    const [registerInformation, setRegisterInformation] = useState({
        Email: "", confirmEmail: "", Password: "", confirmPassword: ""
    });
    

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
          if (user) {
            navigate("/homepage");
          }
        });
    } );      

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    
    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, Email, Password).then(() => {
            navigate("/Homepage");
        })
    };

    const handleRegister = () => {
        
        if (registerInformation.Email !== registerInformation.confirmEmail) {
            alert("Please confirm that email are the same");
            return;} 
        else if (
            registerInformation.Password !== registerInformation.confirmPassword) {
                alert("Please confirm that password are the same");
                return;}
        
        createUserWithEmailAndPassword(auth, registerInformation.Email, registerInformation.Password).then(() => {
            navigate("/Homepage");
        })        
    }

    return (
        <div className="all">
         <img src={TodoSVG} className="todo-svg" />
            <h1>Todo List</h1>
            <div className='login_register'>
            {isRegistering ? (
                <>
                
                 <input id="remail" type = 'Email' placeholder='Email'  value={registerInformation.Email} 
                    onChange={(e) => setRegisterInformation
                    ({...registerInformation, Email: e.target.value }) }/>

                 <input id="rcemail" type = 'Email' placeholder='Confirm  Email' value={registerInformation.confirmEmail}
                    onChange={(e) => setRegisterInformation
                    ({...registerInformation, confirmEmail: e.target.value }) }/>

                 <input id="rpassword" type = 'Password' placeholder='Password' value={registerInformation.Password}
                    onChange={(e) => setRegisterInformation
                    ({...registerInformation, Password: e.target.value }) }/>

                 <input id="rcpassword" type = 'Password' placeholder='Confirm Password' value={registerInformation.confirmPassword}
                    onChange={(e) => setRegisterInformation
                    ({...registerInformation, confirmPassword: e.target.value }) }/>

                 <button id="rcreate" onClick={handleRegister}>Register</button>
                 <button onClick={() => setIsRegistering(false)} >
                    Go back </button> 
                </>
                ) : (
                <>
                 <input id="lemail" type = 'Email' onChange = {handleEmailChange} value= {Email} />
                 <input id="lpassword" type='Password' onChange = {handlePasswordChange} value= {Password}/>
                 <button id="lsignin" className="signInButton" onClick={handleSignIn}>SignIn</button>
                 <button id="lcreate" className="createButton" onClick={() => setIsRegistering(true)} >
                    Create an account </button>
                </>
                )}
            </div>
            
        </div>
        )
}
