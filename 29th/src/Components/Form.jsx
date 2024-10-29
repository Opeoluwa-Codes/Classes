import { useState } from "react";

import styled from "styled-components";

const Form = () =>{

    const[Username, setUsername] = useState("")
    const[Password, setPassword] = useState("")

    const EnterName = (e) =>{
        setUsername(e.target.value)
    }

    const EnterPass = (e) =>{
        setPassword(e.target.value)
    }

    return(
        <div>
            
            <EntryForm action="get">

                <div>
                    <label htmlFor="Username">Username:</label>
                    <input type="text" className="Username" placeholder="username.." onChange={EnterName}/>
                </div>

                <div>
                    <label htmlFor="Password">Password:</label>
                    <input type="password" className="Password" placeholder="password..." onChange={EnterPass}/>
                </div>

                <button>Submit</button>

            </EntryForm>

            <div>
                <h2>values</h2>
                <p>Username: {Username}</p>
                <p>Password: {Password}</p>
            </div>

        </div>
    );
};

export default Form;

const EntryForm = styled.div`

    div{

        margin-bottom: 10px;

        label{
            margin-right: 10px;
        }
    }
`