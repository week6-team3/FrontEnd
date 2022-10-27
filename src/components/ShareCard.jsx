import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const ShareCard = ({ share }) => {
    const navigate = useNavigate();

    const { posts } = useSelector(state => state.posts);
    
    // const post = posts.find((post) => post.id === share.postId)
    const post = posts.find((post) => post.postId === share.postId)
    console.log(posts)

    return (
        <Card>
            <TextBox>
                <p>{post?.title}</p>
                <div>{post?.travel === "0" ? <div id="p1">해외여행</div> : <div id="p2">국내여행</div>}</div>
            </TextBox>
            <button onClick={() => navigate(`/home_detail/${share.postId}`)}>둘러보기</button>
        </Card>
    );
}
export default ShareCard

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
    
    p{
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
