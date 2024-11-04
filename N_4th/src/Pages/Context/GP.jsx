import styled from "styled-components";
import { useContext } from "react";


const GP = () =>{

    const visualize = useContext(gift)

    return(
        <div>
            <p>Grandparents:</p>
            <p>We are giving you {visualize}</p>
        </div>
    );
};

export default GP;