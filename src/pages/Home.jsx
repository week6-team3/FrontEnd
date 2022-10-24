import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'

import Button from '@mui/material/Button';
import Categorie from '../components/Categorie'
const Home = () => {


    return (
        <>
            <Layout>
                <Header />
                <Categorie />
                <Container>
                    <BtnBox>
                        <Button style={{ backgroundColor: "#293991" }} variant="contained" href="/create/add">
                            게시글 작성
                        </Button>
                    </BtnBox>
                    <PostCard />
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
`
const BtnBox = styled.div`
    display:flex;
    flex-direction: row-reverse;
`