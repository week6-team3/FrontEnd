import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Categorie from '../components/Categorie'
import Button from '../elem/button'
import axios from 'axios'

import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { __addPosts } from '../redux/modules/postsSlice'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'
import Swal from 'sweetalert2'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'


const Create = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialstate = {
        title: "",
        travel: "0",

        // checkList: [],

    }

    const [post, setPost] = useState(initialstate)
    const [files, setFiles] = useState("");


    const onLoadFile = (e) => {
        setFiles(e.target.files[0])
        // console.log("up", e.target.files[0])
    }



    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value })
        // console.log("ch", post)
    }


    const postsSubmit = (e) => {
        e.preventDefault()
        // const form = document.getElementById('form')
        // const formData = new FormData()
        // formData.append('file', files, 'img_file')
        // console.log("123", formData.get("file"))
        // console.log("formdata", formData)
        // console.log("img", files)
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
                    <CreatBox id="form">
                        <TitleBox>
                            <div>여행의 시작은?</div>
                        </TitleBox>
                        <CreateWrap>
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
                            {/* <div>
                                <label htmlFor="file">이미지 선택하기</label>
                                <input id="fileAdd" name="file" type="file" accept="image/*" onChange={onLoadFile} />
                                <p>권장 이미지 크기 : ~~</p>
                                <div id='imgPreview'></div>
                            </div> */}
                            <Button size="size2" variant="contained" onClick={postsSubmit}>작성</Button>
                        </CreateWrap>
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

const CreatBox = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    /* border: 1px solid #293991; */
    width: 40rem;
    height: 64rem;
    margin: auto;
`


const TitleBox = styled.div`
    display:flex;
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
const CreateWrap = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    height: 55rem;
    padding:20px;
    gap: 3rem;
    border: 1px solid #293991;
    margin-bottom: 3rem;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    /* background-color: #293991; */
    
`