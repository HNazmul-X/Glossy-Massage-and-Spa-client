import React from 'react';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../Contextapi/CustomContext';
import MyNavbar from '../MyNavbar/MyNavbar';
import { initializeAuthFramework, signInWithGoogle } from './loginManager';

const Login = () => {

    const {loggedInUser , setLoggedInUser} = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    const {from} = location.state || {from :{pathName: "/"}}


    initializeAuthFramework()

    const googleLogin = () => {
        signInWithGoogle()?.then(res=> {
            setLoggedInUser(res)
            history.push(from)
        })
    }

    return (
        <div id="login-page">
            <MyNavbar/>
            <div className="container">
                <div className="p-5"></div>
                <div className="row justify-content-center">
                    <div className="col-lg-6 alert-primary border-1 border p-3 py-5">
                       <div className="input-group w-75 mx-auto" onClick={googleLogin}>
                           <span className="input-group-text">G</span>
                           <input type="submit" value="Login With google" className="form-control btn btn-outline-success"/>
                       </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;