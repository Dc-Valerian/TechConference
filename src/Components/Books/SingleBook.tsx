import React from 'react'
import styled from "styled-components"
import pic from "../Assets/book1.webp";



const SingleBook = () => {
    return (
        <Container>
         <Wrapper>
         <First>
						 <Hold>
							 <AuthorImage>V</AuthorImage>
						     <AuthName>Valerian Pedro
                               
                             </AuthName>
						 </Hold>
					   <MainImage src={pic}/>
                       <h2>
                           HELLO WORLD
                       </h2>
                       <Desc>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt corrupti repellat obcaecati impedit error adipisci at sit laborum labore iure id voluptatum, est voluptate consequuntur vitae atque laudantium inventore et dolores asperiores voluptatem officia tempore voluptates? Sequi natus assumenda sapiente quia, vitae perspiciatis perferendis excepturi eligendi, nesciunt error at odio veniam ipsum eveniet amet magnam tempore in libero architecto pariatur tempora maiores explicabo! Harum perferendis nesciunt iste minima tempore. Ratione, dolorem eos temporibus magnam laudantium obcaecati cumque rem qui quia rerum porro quam unde. Nemo ipsum perspiciatis repellendus deleniti non sint eum pariatur sunt asperiores magni, ad harum, dicta maiores?
                       </Desc>
					</First>
         </Wrapper>
        </Container>
    )
}

export default SingleBook

const Container = styled.div`
display:flex;
justify-content: center;
align-items: center;
width:100%;
text-align: left;
padding-bottom:70px ;
`;

const Wrapper= styled.div`
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
width:80%;
text-align: left;

h2{
 
    width: 100%;
}
`;
const Desc = styled.div`
font-size: 20px;
`;

const MainImage = styled.img`
width:100%;
height:500px;
border-radius: 5px;
background-color: #ffff;
margin-right: 5px;
object-fit: contain;
margin-top: 30px;

`;
const First = styled.div`
display: flex;
margin-top: 50px;
flex-direction: column;

`;
const Hold = styled.div`
display: flex;
align-items: center;
cursor: pointer;
width: 100%;
/* flex-direction: column; */

`;
const AuthorImage = styled.div`
height: 50px;
width: 50px;
border-radius: 50%;
background-color: #bb3d6e;
display: flex;
justify-content: center;
align-items: center;
color: white;
font-weight: bold;
margin-right: 10px;

`;
const AuthName = styled.div`
font-weight: bold;
font-size: 25px;

span{
    font-size: 12px;
}
`;
const ViewIcon = styled.div`
display: flex;
align-items: center;
font-size: 13px;
color: gray;
span{
	color: black;
}
`;