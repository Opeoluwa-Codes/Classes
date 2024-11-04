import styled from "styled-components";
import OmoOmo from "./OmoOmo"


const Omo = ({Flex}) =>{
    
    return(
        <div>
            <p>Omo:</p>
            <p>Grandpa and Grandma gave our parents {Flex} for the kids</p>
            <br/>
            <p><OmoOmo Yay="biscuits and sweets"/></p>
        </div>
    );
};

export default Omo;