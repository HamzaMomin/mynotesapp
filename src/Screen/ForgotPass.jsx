import React from 'react';

const ForgotPassword = () => {
  return (
    <div>
       <div className="box">
            <form>
                
                <div className="input-container">
                    <input type="text" required />
                    <label>Email</label>
                </div>
                <div className="input-container">
                    <input type="Password" required="" />
                    <label>Password</label>
                </div>
                
                <button type="button" className="btn">Login</button>
              
                
            </form>
        </div>
      
    </div>
  );
};

export default ForgotPassword;
