import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react"
import { useEffect } from "react";

const Blog = () =>{
    

    const [BlogData, setBlogData] = useState([])
    const [fetchOnClick, setFetchOnClick] = useState(false)

    useEffect(()=>{
        const fetchBlog = () =>{
            setFetchOnClick(true)
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setBlogData(data)
                // update state
                setFetchOnClick(false)
            })
        }

        if (fetchOnClick) {
            fetchBlog()
        } else{
            console.log("I have not been clicked")
        }
        
    }, [fetchOnClick])

    // can add BlogData into []
    
    return(
        <div>
            <AllDivs>

                <div className="header">
                    <div >
                        <section>Our Blog</section>
                    </div>
                    <div className="right">
                        <p>Contact Us</p>
                        <p>Write with us</p>
                        <p>Register</p>
                        <button onClick={setFetchOnClick}>Click</button>
                    </div>
                </div>

                <div className="displayBlog">
                    {
                        BlogData.map((post, index)=>{
                            return(
                                <div key={index}>
                                    {post.title}
                                </div>
                            )
                        })
                    }
                </div>

            </AllDivs>
        </div>
    );
};

export default Blog;

const AllDivs = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        padding: 20px 20px 20px 20px;
        div{
            section{
                width: fit-content;
                font-size: 30px;
                font-weight: 800;
            }
        }
        .right{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 400px;
            p{
                font-size: 16px;
                width: fit-content;
            }
        }
    }

    .displayBlog{
        margin-top: 20px;
        margin-left: 20px;
        margin-right: 20px;
        width: 100%;
        height: fit-content;
    }
`