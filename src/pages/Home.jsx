import React, { useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import ShareCard from '../components/ShareCard'



import Categorie from '../components/Categorie'
import { useDispatch, useSelector } from 'react-redux'
import { __getSharePost } from '../redux/modules/sharingsSlice'
import { __getPosts } from '../redux/modules/postsSlice'

const Home = () => {
    const dispatch = useDispatch();

    const { sharings } = useSelector((state) => state.sharings)
    const { posts } = useSelector((state) => state.posts)
    console.log("posts", posts)
    console.log("share", sharings)

    useEffect(() => {
        dispatch(__getSharePost());
    }, [dispatch])

    useEffect(() => {
        dispatch(__getPosts());
    }, [dispatch])



    return (
        <>
            <Layout>
                <Header />
                <Categorie />
                <Container>
                    <PostBox>
                    {sharings.map((share) => {
                    return <ShareCard key={share.id} share={share} />})}
                    </PostBox>
                </Container>
                <Footer />
            </Layout>
        </>
    )
}

export default Home

const Container = styled.div`
    box-shadow: 3px 5px 5px 1px gray;
    width: 100%;
    height: 70rem;
    background-color: #F9EBD7 ;
    padding: 30px;
    max-height: 150rem;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar{
    width: 7px
    }
    &::-webkit-scrollbar-thumb {
    background: #293991;
    border-radius: 10px;
    }
    `

const PostBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    margin-top: 10px;
`
