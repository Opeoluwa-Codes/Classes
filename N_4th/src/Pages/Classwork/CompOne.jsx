import styled from "styled-components";
import {Color} from "./CreateContext"
import { useContext } from "react";


const CompOne = () =>{

    const Black = useContext(Color)

    return(
        <div>
            {Black}
        </div>
    );
};

export default CompOne; 