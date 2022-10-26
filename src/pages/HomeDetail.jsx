import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'

import styled from 'styled-components'
import Categorie from '../components/Categorie'

import CommentList from '../features/comments/CommentList'
import Likes from '../features/comments/Likes'
import { __getSharePost } from '../redux/modules/sharingsSlice'
import { __getCheckList } from '../redux/modules/checkListSlice'
import Checks from '../features/checks/Checks'
import { Share } from '@material-ui/icons'


const HomeDetail = () => {
    const dispatch = useDispatch();
    
    const { id } = useParams();

    const { checkList } = useSelector((state) => state.checkList)

    const check = checkList.find((check) => check.postId === +id )
    console.log("체크", check)

    const { sharings } = useSelector((state) => state.sharings)
    console.log("셰어", sharings)

    // const share = sharings?.find((share) => share.postId === Number(id))
    // console.log("진짜셰어",share)

    useEffect(() => {
        dispatch(__getCheckList());
    }, [dispatch])

    useEffect(() => {
        dispatch(__getSharePost());
    }, [dispatch])


    return (
        <>
            <Layout>
                <Header />
                <Categorie />
                    <Container>
                        <DetailBox>
                        <TitleBox> 이거 챙겨야지~! </TitleBox>
                        
                        <StListBox>
                            <h1> 😎 챙길 목록 </h1>
                            <div>
                                {checkList.map((check) => check.postId === Number(id) ?
                                <Checks isHome={true} key={check.id} check={check} /> : null)}
                        </div>
                        </StListBox>
                    <CommentList/>
                    <Likes/>
                    </DetailBox>
                </Container>
                <Footer />
            </Layout>
        </>
    )
}

export default HomeDetail;

const Container = styled.div`
    box-shadow: 3px 5px 5px 1px gray;
    width: 100%;
    height: 75rem;
    background-color: #F9EBD7 ;
    padding: 20px;
    `

const DetailBox = styled.div`
     display: flex;
     flex-direction: column;
     align-content: center;
     flex-wrap: nowrap;
     align-items: center;

     width: 80%;
     height:100%;
     margin: auto;
     border: 1px solid #293991
 `

 const StListBox = styled.div`
 /* background-color: red; */
    display:flex;
    flex-direction: column;
    width:100%;
    /* height: 55rem; */
    height: 50%;
    padding:20px;
    /* border: 1px solid #293991; */
    margin-bottom: 4rem;
    overflow-x: auto; //스크롤생김
    &::-webkit-scrollbar{
    width: 7px
    }
    &::-webkit-scrollbar-thumb {
    background: #293991;
    border-radius: 10px;
    }
 `

 const TitleBox = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;

    width:100%;
    height:5rem;
    padding:20px;
    background-color: #293991;
    color: white;
    border: 1px solid #293991;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`