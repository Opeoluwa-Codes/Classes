import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react"
import { useEffect } from "react";

const Blog = () =>{
    

    const [BlogData, setBlogData] = useState([])
    const [fetchOnClick, setFetchOnClick] = useState(false)

    // using eventHandler to observe changes = onChange
    const[userName, setUserName] = useState("")
    const[email, setEmail] = useState("")
    const[bio, setBio] = useState("")
    const[studentData, setStudentData] = useState([])
    const[decree, setDecree] = useState([
        {
            tag: "Dirk",
            sex: "male"
        },{
            tag: "Mark",
            sex: "male"
        },{
            tag: "Sharon",
            sex: "female"
        }
    ])

    // useEffect (()=>{ 
    //     alert("I hope you enjoy your time")
    // }, [studentData])

    // don't get dependency tho

    // console.log(studentData) 

    const postData = (e) =>{
        e.preventDefault();
        let testData = studentData;
        testData.push({
            userName, email, bio
        })
        setStudentData(testData)
        // setStudentData([{userName, email, bio}])
        // setStudentData([...studentData, {userName, email, bio}])
        setUserName("")
        setEmail("")
        setBio("")

    }

    // using onChange without adding value

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
                        <Link to="/Kuda1"><p>Write with us</p></Link>
                        <p>Register</p>
                        <button onClick={setFetchOnClick}>Click</button>
                    </div>
                </div>

                <div className="body">

                    <div className="topBody">
                        <h2>Enter the information below</h2>
                    </div>

                    <form action="" onSubmit={postData}>
                        <input type="text" placeholder="enter your username" value={userName} onChange={(e) =>{setUserName(e.target.value)}} required/>
                        {/* can set a value from the usestate to the input value={} */}
                        <input type="email" placeholder="enter your email address" value={email} onChange={(e) =>{setEmail(e.target.value)}} required/>
                        <textarea name="bio" id="bio" placeholder="enter your bio" value={bio} onChange={(e) =>{setBio(e.target.value)}} required></textarea>
                        <button type="submit">Submit</button>
                    </form>

                </div>

                <div className="display">
                    <section>Username: {studentData[studentData.length -1]?.userName}</section>
                    <section>Email: {studentData[studentData.length -1]?.email}</section>
                    <section>Bio: {studentData[studentData.length -1]?.bio}</section>
                </div>

                <div className="map">
                    <h2>Map</h2>

                    <div>
                        {
                            decree.map((post, index)=>{
                                return(
                                    <div key={index}>
                                        {post.tag} is {post.sex}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


                {/* {<div className="displayBlog">
                    {
                        BlogData.map((post, index)=>{
                            return(
                                <div key={index}>
                                    {post.title}
                                </div>
                            )
                        })
                    }
                </div>} */}

                {
                    // ternary operator comes in here
                }

                </AllDivs>
            
        </div>
    );
};

export default Blog;

const AllDivs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

    .body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: fit-content;
        height: fit-content;

        .topBody{
            color: blue;
        }

        form{
            display: flex;
            flex-direction: column;
            row-gap: 20px;
        }

    }

    .display{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        width: 40%;
        height: fit-content;
        color: white;
        background-color: blue;
        box-sizing: border-box;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        border: none;
        row-gap: 20px;
    }

    .map{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30%;
        border: 1px blue solid;
        margin-top: 20px;
        box-sizing: border-box;
        padding-bottom: 10px;

        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

    }

`