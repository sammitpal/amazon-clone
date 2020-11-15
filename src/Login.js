import React, {useState} from 'react';
import './Login.css';
import { Link , useHistory} from "react-router-dom";
import { auth } from './components/firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push("/")
            }
            
        }).catch(error=> alert(error.message));
    }

    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push("/")
            }
        }).catch(error=> alert(error.message));
    }

    return (
        <div className="login">
            <Link to="/">
            <img src="https://logo-logos.com/wp-content/uploads/2016/12/Amazon_logo.png" alt="" className="login_logo"/>
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className="login_signInButton" onClick={signIn}>Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's FAKE CLONE Conditions of Use and Privacy Notice.</p>
                <button className="login_register" onClick={register}>Create Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
