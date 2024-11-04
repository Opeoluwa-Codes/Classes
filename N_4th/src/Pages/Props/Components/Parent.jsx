import styled from "styled-components";
import Omo from "./Omo"


const Parent = ({deliver}) =>{
    
    return(
        <div>
            <p>Parents:</p>
            <p>Grandpa and Grandma gave us {deliver}</p>
            <br/>
            <p><Omo Flex="biscuits and sweets"/></p>
        </div>
    );
};

export default Parent;