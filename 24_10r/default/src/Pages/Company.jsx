import styled from "styled-components";
import { Link } from "react-router-dom";

const Company = () =>{
    return(
        <div>

            <h1>My Company</h1>

            <Link to="/Personal">            
                <h2>Move</h2>
            </Link>

        </div>
    );
};

export default Company;