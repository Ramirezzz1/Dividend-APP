import React, {useState} from 'react'
import FormSignup from './SignUp'
import FormSuccess from './FormSuccess'

const Form = () => {
    const [isSubmitted, setIsSubmitting] = useState(false)

    function submitForm(){
        setIsSubmitting(true);
    }
    return (
        <div>
            {/* {!isSubmitted ? (<FormSignup submitForm={submitForm} />) : (<FormSuccess />)} */}
            <FormSuccess />
        </div>
    )
}

export default Form
