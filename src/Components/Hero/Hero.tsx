import React from 'react'
import styled from 'styled-components';
import GlobalButton from '../GlobalButton';
import {AiOutlineSearch} from "react-icons/ai";

const Hero = () => {
  return (
    <div>
        <Container>
            <Video 
            loop 
            autoPlay
            playsInline
            muted
             src = "https://cdn.dribbble.com/uploads/39421/original/963b4f8739cbdf86ca3f3a23245efd18.mp4?1657824985" />

             <Content>
                <ButtonHold>
                    <GlobalButton text = "Discover" />
                    <GlobalButton text = "Animation" />
                    <GlobalButton text = "Branding" />
                    <GlobalButton text = "Illustration" />
                    <GlobalButton text = "Mobile" />
                    <GlobalButton text = "Print" />
                    <GlobalButton text = "Mobile" />
                    <GlobalButton text = "Typography" />
                    <GlobalButton text = "Web" />
                </ButtonHold>
                <h2>
                    Explore the world’s leading <br /> design portfolios
                </h2>
                <p>
                Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.
                </p>
                <InputHold>
                <Icon>
                    <AiOutlineSearch />
                </Icon>
                <Input placeholder='Search for books...' />
             </InputHold>
             </Content>
            
        </Container>
    </div>
  )
}

export default Hero;

const Container = styled.div`
    width: 100%;
    height: 600px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    ::before{
        content: "";
        background-color: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 100%;
        position: absolute;
    }
`;
const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Content = styled.div`
    position: absolute;
    height: 100%;
    width: 90%;
    display: flex;
    color: white;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h2{
        margin: 0;
        font-size: 30px;
        margin-top: 30px;
    }
    p{
        width: 600px;
        @media screen and (max-width: 600px) {
            width: 90%;
        }
    }
`;
const ButtonHold = styled.div`
    margin-top: 50px;
    display: flex;
    overflow-x: scroll;
    justify-content: center;
    align-items: flex-start;
    /* width: 100%; */
    ::-webkit-scrollbar{
        width: 0;
    }
    @media screen and (max-width: 768px) {
        justify-content: flex-start;
        align-items: flex-start;
    }
`;
const Icon = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    font-size: 20px;
`;
const InputHold = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    width: 500px;
    background-color: white;
    color: black;
    border-radius: 25px;

    @media screen and (max-width: 500px) {
        width: 280px;
    }

`;
const Input = styled.input`
    border: none;
    outline: none;
    flex: 1;
    background-color: transparent;
    ::placeholder{
        font-weight: bold;
        color: silver;
        font-size: 15px;
    }
`;