import React from 'react'
import { SigninContainer,
    SigninBox,
    SignTitle,
   SigninLable,
SigninInput,
 } from './signinElement'



const Signin = () => {
    return (
        <SigninContainer>
              <SigninBox>
                  <SignTitle>Sign In</SignTitle>
                  <SigninLable>Username:-</SigninLable>
                  <SigninInput placeholder="Username"></SigninInput><br></br><br></br>
                  <SigninLable>Password:-</SigninLable>
                  <SigninInput  type="password"placeholder="Password"></SigninInput><br></br><br></br>
                 <SigninInput type="submit"></SigninInput>
              </SigninBox>
        </SigninContainer>
    )
}

export default Signin
