import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { __getPosts } from '../redux/modules/postsSlice'

import Categorie from '../components/Categorie'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'

import styled from 'styled-components'

const Mypage = () => {
    const dispatch = useDispatch();

    const { posts } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(__getPosts());
    }, [dispatch])

    return (
        <>
            <Layout>
                <Header />
                <Categorie />
                <Container>
                    {posts?.map((post) => (<PostCard key={post.id} post={post} />))}
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
`