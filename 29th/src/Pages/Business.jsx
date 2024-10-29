import styled from "styled-components";
import { Link } from "react-router-dom";

const Business = () =>{
    return(
        <div>

            <h1>My Business</h1>

            <Link to="/Company">            
                <h2>Move</h2>
            </Link>

        </div>
    );
};

export default Business;