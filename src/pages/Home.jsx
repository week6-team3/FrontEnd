import React, { useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'


import Categorie from '../components/Categorie'
import { useDispatch } from 'react-redux'
import { __shareGet } from '../redux/modules/sharingsSlice'
import Button from '../elem/button'
import { useNavigate } from 'react-router-dom'
import { getCookieToken } from '../shared/cookie'
import Swal from 'sweetalert2'
const Home = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(__shareGet())
    }, [dispatch])



    return (
        <>
            <Layout>
                <Header />
                <Categorie />
                <Container>

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
