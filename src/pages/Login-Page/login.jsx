import React, { useState } from 'react';
import './loginstyle.css';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    OTP: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="header">
                <h2>Sign Up</h2>
              </div>

              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name" />

              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" />

              <label>Mobile</label>

              <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter Mobile Number" />

              <div className='otp_number'>

                <button type="button" className="otp-button">Send OTP </button>
                <div className='otp'>
                  <input type="otp" name="OTP" value={formData.OTP} onChange={handleChange} placeholder="_ _ _ _ _" />
                </div>
              </div>


              <div className="button-group">
                {/* <button type="button" className="cancel-button">Cancel</button> */}
                <button type="submit" className="register-button">Login</button>
              </div>
            </form>
          </div>
        </div></div>
    </main>
  );
};

export default Login;
