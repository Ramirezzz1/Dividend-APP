import React from 'react';
import useForm from './useForm';
import validate from './validateInfo'
import './Form.css';


const FormSignup = (submitForm) => {
    const{handleChange,values,handleSubmit,errors}=useForm(submitForm, validate);


    return (
      <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
            <h1>Join the Team today! Create your account by filling out the information below.</h1>
            <div className="form-inputs">
                <label htmlFor="firstname" className="form-label"></label>FirstName
                    <input id="firstname" type="text" name="firstname" className='form-input' placeholder="Enter your First Name" value={values.firstname} onChange={handleChange}/>
                    {errors.firstname && <p>{errors.firstname}</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor="lastname" className="form-label"></label>LastName
                    <input id="lastname" type="text" name="lastname" className='form-input' placeholder="Enter your Last Name" value={values.lastname} onChange={handleChange}/>
                    {errors.lastname && <p>{errors.lastname}</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor="email" className="form-label"></label>Email
                    <input id="email" type="email" name="email" className='form-input' placeholder="Enter your Email" value={values.email} onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor="password" className="form-label"></label>Password
                    <input id="password" type="password" name="password" className='form-input' placeholder="Enter Password" value={values.password} onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor="password2" className="form-label"></label>Confirm Password
                    <input id="password2" type="password" name="password2" className='form-input' placeholder="Confirm Password" value={values.password2} onChange={handleChange}/>
                    {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button className="form-input-btn" type="submit">Sign Up</button>
            <span className="form-input-login">Already have an account? Login
            <a href="/signin">here</a>
            </span>
        </form>
      </div>
    )
}

export default FormSignup;
