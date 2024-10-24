import styled from "styled-components";
import { Link } from "react-router-dom";

const Personal = () =>{
    return(
        <div>

            <h1>My Personal</h1>

            <Link to="/">            
                <h2>Move</h2>
            </Link>

        </div>
    );
};

export default Personal;