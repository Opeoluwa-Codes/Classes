import pp from "../assets/JPG/pp.jpg"
import styled from "styled-components"
import { useState } from "react"

const Card = () =>{

    const[Like, SetLike] = useState(0)
    const[CheckClick, SetCheckClick] = useState(false)

    const LikePicture = () =>{
        SetLike(Like + 1)
        SetCheckClick(true)
    }  
    


    return(
        <div>

            <DivWrapper>

                <img src={pp} alt="" />

                <div className="LiveWrapper">

                    <div className={CheckClick? `backgroundChange` : `div`} onClick={LikePicture}>
                        L
                    </div>

                    <p>{Like}</p>

                </div>

            </DivWrapper>

        </div>
    );
};

export default Card;

const DivWrapper = styled.div`
    height: fit-content;
    width: fit-content;
    border: 1px black solid;
    display: flex;
    flex-direction: column;
    align-items: center;

    .LiveWrapper{
        border: 1px red solid;
        margin-top: 20px;
        margin-bottom: 20px;
        width: 50px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div{
            border: 1px red solid;
            width: 25px;
            height: 25px;
            border-radius: 50px;
            text-align: center;
        }

    }

    .backgroundChange{
        background-color: red;
        color: white;
    }

`
