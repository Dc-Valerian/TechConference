import React from 'react'
import styled from 'styled-components';
import {AiOutlineSearch} from "react-icons/ai";
import logo from "../Assets/2982377.jpg"
import {Link} from "react-router-dom";
import UploadPage from '../UploadPage/UploadPage';


const Header = () => {
  return (
    <div>
       <Container>
        <Text>
        <Logo src={logo} /> <span>BookStore</span>
        </Text>
        <Hold>
            <Search><AiOutlineSearch /></Search>
          <Link to ={`/upload`}>
          <Button>Upload Books</Button>
          </Link>
        </Hold>
       </Container>
    </div>
  )
}

export default Header;

const Container = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;
const Logo = styled.img`
    height: 60px;
   
    @media screen and (max-width: 500px) {
        height: 25px;
    }
`;
const Hold = styled.div`
    display: flex;
    align-items: center;
    margin-right: 50px;
    @media screen and (max-width: 500px) {
        margin-left: 20px;
    }
`;
const Search = styled.div`
    margin-right: 40px;
    color: silver;
    font-size: 20px;
    @media screen and (max-width: 500px) {
      display: none;
    }
`;
const Button = styled.button`
    height: 40px;
    width: 150px;
    background-color: #bb3d6e;
    color: white;
    border: none;
    outline: none;
    border-radius: 5px;
    transition: all 350ms;
    cursor: pointer;
    :hover{
        transform: scale(0.95);
    }
    @media screen and (max-width: 500px) {
        width: 120px;
        margin-left: 15px;
    }
`;
const Text = styled.div`
display: flex;
align-items: center;
margin-left: 50px;
@media screen {
        margin-left: 20px;
    }
    span{
        margin-left: 10px;
        font-weight: bold;
        font-size: 20px;
        @media screen and (max-width: 500px) {
            font-size: 15px;
        }
    }
   
`;