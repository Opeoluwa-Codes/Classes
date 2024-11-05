import styled from "styled-components";
import HomeImage from "../assets/HomeImage.jpg"
import { Link } from "react-router-dom";

const HomePage = () =>{

  return(
    
      <HomeWrapper>

        <Link to="/SignIn"><p>Sign In</p></Link>
          
        <img src={HomeImage} alt="#" />

      </HomeWrapper>

  );

};

export default HomePage;

const HomeWrapper = styled.div`
    
    width: 100%;
    height: 100%;

    p{

      font-size: 20px;

    }

    img{

      width: inherit;
      height: inherit;

    }

`