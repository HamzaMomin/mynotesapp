import React from "react";


const login = () => {
    return (

        <div className="box">
        <form>
            <span className="text-center">login</span>
        <div className="input-container">
            <input type="text" required/>
            <label>Email</label>		
        </div>
        <div className="input-container">		
            <input type="Password" required=""/>
            <label>Password</label>
        </div>
            <p className="FP">Forgot Password ?</p>
            <button type="button" className="btn">Login</button>
            <p className="line">Don't have an account?</p>
            <button type="button" className="signup">Sign UP</button>
            </form>	
          </div>
        

    )

}
export default login