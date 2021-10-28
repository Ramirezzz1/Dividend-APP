import React from 'react'


const FormSignup = () => {
    return (
      <div className="form-content-right">
        <form className="form">
            <h1>Join the Team today! Create your account by filling out the information below.</h1>
            <div className="form-inputs">
                <label htmlFor="firstname" className="form-label"></label>FirstName
                    <input id="firstname" type="text" name="firstname" className='form-input' placeholder="Enter your First Name"/>
            </div>
            <div className="form-inputs">
                <label htmlFor="lastname" className="form-label"></label>LastName
                    <input id="lastname" type="text" name="lastname" className='form-input' placeholder="Enter your Last Name"/>
            </div>
            <div className="form-inputs">
                <label htmlFor="email" className="form-label"></label>Email
                    <input id="email" type="email" name="email" className='form-input' placeholder="Enter your Email"/>
            </div>
            <div className="form-inputs">
                <label htmlFor="username" className="form-label"></label>Password
                    <input id="password" type="text" name="username" className='form-input' placeholder="Enter Password"/>
            </div>
        </form>
      </div>
    )
}

export default FormSignup;
