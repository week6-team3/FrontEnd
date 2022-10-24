import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'

import { useDispatch } from 'react-redux'
import { __addPosts } from '../redux/modules/postsSlice'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'
import Swal from 'sweetalert2'
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import Categorie from '../components/Categorie'



const Create = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialstate = {
        title: "",
        travel: "0",
        completion: false,
        // checkList: [],

    }

    const [post, setPost] = useState(initialstate)
    // const [check, setCheck] = useState("")



    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value })
        // console.log("ch", post)
    }

    // const onCheckHandler = (e) => {
    //     setCheck(e.target.value)
    // }
    // const submitCheck = (e) => {
    //     e.preventDefault()
    //     setPost(prev => ({ ...prev, checkList: [...prev.checkList, { content: check, isDone: false, postId: Date.now() }] }))
    //     setCheck("")
    // }


    const postsSubmit = (e) => {
        e.preventDefault()
        if (post.title === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '빈칸을 입력해주세요!😥',
            })
        }
        if (post.title.trim() === "") return;
        dispatch(__addPosts({ ...post }))
        setPost(initialstate)
        navigate("/mypage/:id")
    }


    return (
        <>
            <Layout>
                <Header />
                <Categorie />
                <Container>
                    <CreatBox>
                        <div>
                            <label>제목 :</label>
                            <input name="title" value={post.title} type="text" onChange={onChangeHandler} />
                        </div>

                        <FormControl className='formContorol'>
                            <FormLabel id="demo-radio-buttons-group-label">여행지를 선택해주세요!</FormLabel>
                            <RadidGr>
                                <RadioGroup className='rG'
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="0"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel name="travel" value="0" control={<Radio />} label="국내여행" onChange={onChangeHandler} />
                                    <FormControlLabel name="travel" value="1" control={<Radio />} label="해외여행" onChange={onChangeHandler} />
                                </RadioGroup>
                            </RadidGr>
                        </FormControl>
                        {/* <form action="http://localhost:3000/posts" enctype="multipart/form-data" method="post">
                            <label for="img"></label>
                            <input type="file" id="img" name="img", accept="image/*">
                            <input type="submit" value="제출">
                        </form> */}


                        <Button variant="contained" onClick={postsSubmit}>Contained</Button>
                    </CreatBox>

                </Container>
                <Footer />
            </Layout>
        </>
    )
}

export default Create

const Container = styled.div`
    box-shadow: 3px 5px 5px 1px gray;
    
    width: 100%;
    height: 70rem;
    background-color: #F9EBD7 ;
    padding: 30px;
    

    .formContorol{
        align-items: center;
    }
`
const RadidGr = styled.form`
    .rG{
        display:flex;
        flex-direction: row;
    }
    
`

const CreatBox = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    border: 1px solid #293991;
    width: 30rem;
    height: 40rem;
    margin: auto;
`