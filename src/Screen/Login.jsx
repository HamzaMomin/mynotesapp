import React from "react";


const login = () => {
    return (

        <div className="box">
            <form>
                <span className="text-center">login</span>
                <div className="input-container">
                    <input type="text" required />
                    <label>Email</label>
                </div>
                <div className="input-container">
                    <input type="Password" required="" />
                    <label>Password</label>
                </div>
                <p className="FP"><a href="ForgotPass.jsx" target="_blank" >Forgot Password ?</a> </p>
                <button type="button" className="btn">Login</button>
                <p className="line"><a href="SignUp.jsx" target="_blank">Don't have an account?</a></p>
                
            </form>
       
        </div>


    )

}
export default login