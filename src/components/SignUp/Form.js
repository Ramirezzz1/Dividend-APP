import React, { useState } from 'react'
import FormSignup from './SignUp'
import FormSuccess from './FormSuccess'
import './Form.css';

const Form = () => {
    const [isSubmitted, setIsSubmitting] = useState(false)

    function submitForm() {
        setIsSubmitting(true);
    }
    return (
        <>
            <div className="form-container">
                <span className="close-btn">x</span>
                <div className="form-content-left">
                    <img src="img/img-2.svg" alt="spaceship" className='form-img' />
                </div>
                {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
                <FormSuccess />
            </div>
                <FormSuccess/>
            
        </>
    )
}

export default Form
