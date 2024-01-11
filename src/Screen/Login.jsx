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
            <button type="button" className="btn">Login</button>
            <div className="signup" >Don't have an account?</div>
            </form>	
          </div>
        

    )

}
export default login