import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel,Text,FormWrap,Icon } from './SigninElements';

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">Div Coins</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Passowrd</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
            
        </>
    )
}

export default SignIn;
