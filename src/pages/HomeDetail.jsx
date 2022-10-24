import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'

import styled from 'styled-components'
import Categorie from '../components/Categorie'



const HomeDetail = () => {


    return (
        <>
            <Layout>
                <Header />
                <Categorie />
                <Container>

                </Container>
                <Footer />
            </Layout>
        </>
    )
}

export default HomeDetail

const Container = styled.div`
    box-shadow: 3px 5px 5px 1px gray;
    width: 100%;
    height: 70rem;
    background-color: #F9EBD7 ;
    padding: 30px;
`