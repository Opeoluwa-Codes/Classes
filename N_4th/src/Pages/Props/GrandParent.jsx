import styled from "styled-components";
import Parent from "./Components/Parent";


const GrandParent = () =>{

    return(
        <div>
            <p>Grandparents:</p>
            <p>Hello Kids</p>
            <br/>
            <p><Parent deliver="biscuits and sweets"/></p>
        </div>
    );
};

export default GrandParent;