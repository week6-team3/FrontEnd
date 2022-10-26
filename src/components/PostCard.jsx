import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import styled from 'styled-components';
import { __detailPosts, __editPosts } from '../redux/modules/postsSlice';

const PostCard = ({ post }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    console.log('pst', post)


    const onEditHandler = () => {
        dispatch(__editPosts({ id: post.id, completion: !post.completion }))
    }


    const onDetailPage = () => {
        dispatch(__detailPosts({ postId: post.postId }))
        navigate(`/my_detail/${post.postId}`)
        console.log("postId1", post.postId)
    }

    return (
        <Card>
            <TextBox>
                <div id="d1">{post?.title}</div>
                <div>{post?.travel === "0" ? <div id="p1">해외여행</div> : <div id="p2">국내여행</div>}</div>
            </TextBox>
            <BtnBox>
                <button onClick={onDetailPage}>둘러보기</button>
                <button onClick={onEditHandler}>{post?.completion ? '취소' : '완료'}</button>
            </BtnBox>

        </Card >
    );
}
export default PostCard

const Card = styled.div`
    display:flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;

    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)) , url('https://picsum.photos/536/354');
    background-repeat : no-repeat;
    background-position: center;
    background-size: 20rem 28rem;
    
    transition: all 0.2s linear;
    &:hover{
        transform: scale(1.1);

    }
    
    width: 20rem;
    height: 28rem;
    border-radius: 10px;
    padding: 20px;
    button{
        width: 8rem;
        height: 4rem;
        background-color: #ffffffb8;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        &:hover{
            background-color: #fffffff0;
        }
    }

`
const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    color: white;
    
    #d1{
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

const BtnBox = styled.div`
    display:flex;
    gap: 15px;
`










// import React from 'react'

// const PostCard = () => {
//     return (
//         <div>PostCard</div>
//     )
// }

// export default PostCard