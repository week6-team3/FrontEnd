import React from 'react';
import { useNavigate } from 'react-router-dom';


import styled from 'styled-components';

const PostCard = ({ post }) => {
    const navigate = useNavigate();
    console.log("post", post.travel)
    console.log("post2", post)


    return (
        <Card>
            <TextBox>
                <h1>{post.title}</h1>
                <div>{post.travel === "0" ? <div id="p1">해외여행</div> : <div id="p2">국내여행</div>}</div>
            </TextBox>
            <button onClick={() => navigate(`/my_detail/${post.id}`)}>둘러보기</button>
        </Card>
    );
}
export default PostCard

const Card = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;

    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)) , url('https://picsum.photos/536/354');
    background-repeat : no-repeat;
    background-position: center;
    background-size: 20rem 28rem;
    /* overflow: hidden;
    transition: all 0.2s linear;
    &:hover{
        transform: scale(1.2);

    } */
    
    width: 20rem;
    height: 28rem;
    border-radius: 10px;
    padding: 20px;
    button{
        width: 8rem;
        height: 4rem;
        background-color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        &:hover{
            background-color: #fffffff0;
        }
    }

`
const TextBox = styled.div`
    color: white;
    
    h1{
        font-size:2.5rem;
        margin-bottom: 1rem;
    }
    div{
        

        font-size:1.5rem;
    }
    #p1{
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: #e67c96;
        width: 6rem;
        height:2rem;
        padding: 1.2px;
        border-radius:5px;

    }
    #p2{
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: #2AAC87;
        width: 6rem;
        height:2rem;
        padding: 1.2px;
        border-radius:5px;
    }

`










// import React from 'react'

// const PostCard = () => {
//     return (
//         <div>PostCard</div>
//     )
// }

// export default PostCard