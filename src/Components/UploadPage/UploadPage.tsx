import React from 'react'
import styled from "styled-components"
import {BsImageFill} from "react-icons/bs"

const UploadPage = () => {
    return (
       <Container>
           <Wrapper>
             <Card>
    <Circle>
        <BsImageFill/>
        <span>
            Upload File
        </span>
    </Circle>
   <Text>
   <Input id="pix" type="file"/>
    <Button htmlFor="pix" >
        Upload Cover Image
    </Button>
    <Inp placeholder="Enter Title"/>
    <TexArea placeholder="Summary about the book " />
    <Inp placeholder="Enter The Author Name"/>
    <Select>
        <option>
            Select a book category
        </option>
        <option>
            Comedy
        </option>
        
        <option>
            Fiction
        </option>
        <option>
            Poet
        </option>
        <option>
            Romance
        </option>
        <option>
            Legends
        </option>
        <option>
            Others
        </option>
    </Select>
   </Text>
    <Button2>
        Submit
    </Button2>

             </Card>
           </Wrapper>
       </Container>
    )
}

export default UploadPage
const Text = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
/* @media screen and (max-width:320px) {
 
  
} */
`;
const Button2 = styled.button`
    height: 40px;
    width: 150px;
    background-color: #bb3d6e;
    color: white;
    border: none;
    outline: none;
    border-radius: 5px;
    transition: all 350ms;
    cursor: not-allowed;
    

    margin-top: 10px;
    :hover{
        transform: scale(0.95);
    }
    @media screen and (max-width: 500px) {
        width: 120px;
        margin-left: 15px;
    }
`;
const Select = styled.select`
margin:10px;
width:370px;
height:30px;
border-radius:3px;
outline-color: #eeadcb;
border: 0.7px solid silver;
padding-left: 10px;
`;

const TexArea = styled.textarea`
width:350px;
height:70px;
border-radius:3px;
outline-color: #eeadcb;
border: 0.7px solid silver;
padding-left: 10px;
resize: none;
`;
const Inp = styled.input`
margin:10px;
width:350px;
height:30px;
border-radius:3px;
outline-color: #eeadcb;
border: 0.7px solid silver;
padding-left: 10px;



`;

const Button = styled.label`
height:40px;
width:200px;
background-color:black;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius: 5px;
transition: all 350ms;
cursor: pointer;
margin-top: 10px;

:hover{
    transform: scale(0.98);
}
`;
const Input = styled.input`
display:none;
`;

const Circle = styled.div`
height:100px;
width:230px;
border-radius: 5px;
background-color: #e6e4e4;
display: flex;
justify-content: center;
flex-direction:column;
align-items: center;
color: gray;
font-size:30px;
span{
    font-size:12px;
}
/* @media screen and (max-width:320px) {
    width:150px ;
    height: 100px;
} */
`;
const Card = styled.div`
box-shadow: rgba(17,12,46,0.15)0px 48px 100px 0px;

width:600px;
/* height:300px; */
margin-top:100px;
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
padding:10px;
transition: all 350ms;

:hover{
    cursor: pointer;
    transform: scale(0.98);

}
/* @media screen and (max-width:320px) {
    width:400px ;
    height: 400px;
} */
`;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`;
const Wrapper = styled.div``;