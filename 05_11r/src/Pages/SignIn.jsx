import styled from "styled-components";
import { useState } from "react";


const SignIn = () =>{

  

  return(
    
      <SignInWrapper>

        <form>

              <label htmlFor="Name">Name:</label>
              <input type="text" />

              <label htmlFor="Password">Password:</label>
              <input type="password" />

              <button>Submit</button>

        </form>

      </SignInWrapper>

  );

};

export default SignIn;

const SignInWrapper = styled.div`

  form{

    display: flex;
    flex-direction: column;
    gap: 10px;

    input{

      width: 300px;

    }
    
    button{

      width: 150px;

    }
  }

`

