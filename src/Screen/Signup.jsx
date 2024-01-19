import React from "react";


const SignUp = () => {
    return (

        <div className="SP-Box">
            <div className="SP-Box2">
            <form>
                <span className="heading">Sign UP</span>
                
                <div className="input">
                    <input type="text" required />
                    <label>Name</label>
                </div>

                <div className="input">
                    <input type="text" required />
                    <label>Email</label>
                </div>
                
                <div className="input">
                    <input type="Password" required="" />
                    <label>Password</label>
                </div>
              
                <button type="button" className="btnSignUP">Sign Up</button>
                <p className="line"><a href="Login.jsx" target="_blank">Already have an account?</a></p>
                
               
          
                
            </form>
       
        </div>
        </div>

    )

}
export default SignUp