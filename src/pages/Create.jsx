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
import { getCookieToken } from '../shared/cookie'


const Create = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cookie = getCookieToken('AccessToken')


    const initialstate = {
        title: "",
        travel: "0",
    }
    const [post, setPost] = useState(initialstate)
    const [files, setFiles] = useState("");

    useEffect(() => {
        if (!cookie) {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: '로그인을 해주세요!',
                showConfirmButton: false,
                timer: 1000
            })
            navigate("/login");
        }
    }, [cookie, navigate]);


    const onLoadFile = (e) => {
        setFiles(e.target.files[0])
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
        navigate("/mypage")
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
                            <BoxInBox>
                                <InputBox>
                                    <input name="title" maxLength='13' placeholder='여행의 이름을 정해주세요!' value={post.title} type="text" onChange={onChangeHandler} />
                                </InputBox>
                                <ChoiceBox>
                                    <RadioGroup className='rG'
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="0"
                                        name="radio-buttons-group">
                                        <label>해외여행</label>
                                        <FormControlLabel className='radio' name="travel" value="0" control={<Radio />} onChange={onChangeHandler} />
                                        <label>국내여행</label>
                                        <FormControlLabel className='radio' name="travel" value="1" control={<Radio />} onChange={onChangeHandler} />
                                    </RadioGroup>
                                </ChoiceBox>
                            </BoxInBox>
                            <BtnBox>
                                <Button size="size2" variant="contained" onClick={postsSubmit}>작성</Button>
                                <Button size="size2" variant="contained" onClick={() => navigate('/')}>취소</Button>
                            </BtnBox>
                            {/* <div>
                                <label htmlFor="file">이미지 선택하기</label>
                                <input id="fileAdd" name="file" type="file" accept="image/*" onChange={onLoadFile} />
                                <p>권장 이미지 크기 : ~~</p>
                                <div id='imgPreview'></div>
                            </div> */}
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

const BoxInBox = styled.div`
    /* border: 2px solid #293991; */
    width: 30rem;
    height: 20rem;
    margin:auto;
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

    font-size: 2.5rem;
`
const CreateWrap = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    height: 55rem;
    padding:40px;
    border: 1px solid #293991;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    /* background-color: #293991; */
    
`

const InputBox = styled.div`
    display:flex;
    width: 30rem;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    

    input{
        font-size:2rem;
        border: none;
        border-bottom: 2px solid #293991;
        border-right: 2px solid #293991;
        background-color: #F9EBD7;
        /* box-shadow: 1px 2px 2px 1px #293991; */

        width: 100%;
        height: 4rem;
        &:hover{
            box-shadow: 1px 2px 2px 1px #293991;
        }
    }
`

const ChoiceBox = styled.div`
    font-size:1.8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top:30px;
    
    width: 30rem;
    height:8rem;
    border: 2px solid #293991;
    .rG{ 
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    label{
        margin-right: 1.5rem;
    }
`

const BtnBox = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`