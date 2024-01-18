import React from 'react';

const ForgotPassword = () => {
  return (
    <div>
       <div className="box">
            <form>
            <span className="PR">Password Reset</span>
            <span className="IN">No worries, we'll send you reset instructions</span>
                <div className="input-container">
                    <input type="text" required />
                    <label>Email</label>
                </div>

                
                <button type="button" className="btnPR">Reset Password</button>
              
                <p className="LG"><a href="Login.jsx" target="_blank" >Back to Login</a> </p>
                
            </form>
        </div>
      
    </div>
  );
};

export default ForgotPassword;
