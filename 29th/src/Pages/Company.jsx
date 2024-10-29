import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react"
import { useEffect } from "react";

const Company = () =>{

    const[Num, setNum] = useState(0)

    const increaseNum = () =>{
        setNum(Num + 1)
    }

    const decreaseNum = () =>{
        setNum(Num - 1)
    }

    useEffect(() =>{
        console.log("value is:", Num)
    }, [Num])

    return(
        <CompanyContainer>

            <h1>My Company</h1>

            <Link to="/Personal">            
                <h2>Move</h2>
            </Link>

            <div>
                <button onClick={decreaseNum}>Minus</button>
                
                <p>{Num}</p>

                <button onClick={increaseNum}>Plus</button>
            </div>

        </CompanyContainer>
    );
};

export default Company;

const CompanyContainer = styled.div`
    div{
        display: flex;
        width: 300px;
        justify-content: space-between;
        button{
            width: 100px;
        }
    }
`