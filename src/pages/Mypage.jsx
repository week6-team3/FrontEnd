import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { __detailPosts, __getPosts } from '../redux/modules/postsSlice'

import Categorie from '../components/Categorie'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'

import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Mypage = () => {
    const dispatch = useDispatch();
    // const { id } = useParams();

    const { posts } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(__getPosts());
    }, [dispatch])
    useEffect(() => {
        dispatch(__detailPosts());
    }, [dispatch])


    return (
        <>
            <Layout>
                <Header />
                <Categorie />
                <Container>
                    <ListWrapper>
                        {posts.filter(post => !post.completion).map(post => <PostCard key={post.id} post={post} />)}
                    </ListWrapper>
                    <ListLine />
                    <ListWrapper>
                        {posts.filter(post => post.completion).map(post => <PostCard key={post.id} post={post} />)}
                    </ListWrapper>
                </Container>
                <Footer />
            </Layout>
        </>
    )
}

export default Mypage
const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;

    box-shadow: 3px 5px 5px 1px gray;
    width: 100%;
    height: 70rem;
    background-color: #F9EBD7 ;
    padding: 30px;

    overflow: auto;
    &::-webkit-scrollbar {
    width: 10px;
    
  }
  &::-webkit-scrollbar-thumb {
    background-color: #293991;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: #ccd1e8;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`
const ListLine = styled.div`
    width: 100%;
    margin: auto;
    border-bottom: 2px solid #293991;
`

const ListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

`
