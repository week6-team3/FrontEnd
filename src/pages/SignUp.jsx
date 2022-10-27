import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Categorie from '../components/Categorie'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Button from '../elem/button'


import { useDispatch } from 'react-redux'
import { __signUpDB } from '../redux/modules/usersSlice'

const SignUp = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  // const onSubmit = (data) => {
  //   // console.log("data", data)
  //   Api.post("/signup", data).then((response) => {
  //     console.log("re", response)
  //     if (response.status === 201) {
  //       window.alert(response.data.msg);
  //       navigate("/users/login")
  //     } else if (response.status === 409) {
  //       alert("중복된 아이디 입니다.")
  //     }
  //   })
  // }

  const onSubmit = (payload) => {

    dispatch(__signUpDB(payload))

    navigate('/login')
  }


  return (

    <>
      <Layout>
        <Header />
        <Categorie />
        <Container>
          <SignUpBox>
            <TitleBox>
              <p>나만의 체크리스트를 위한 로그인</p>
            </TitleBox>
            <SignUpWrap onSubmit={handleSubmit(onSubmit)}>
              <p>회원가입</p>
              <input
                placeholder='이메일을 입력하세요'
                {...register("email")}
              />
              <p>0</p>
              <input
                placeholder='닉네임을 입력하세요'
                {...register("nickname")}
              />
              <p>0</p>
              <input
                placeholder='비밀번호를 입력하세요'
                type="password"
                {...register("password")}
              />
              <input
                placeholder='비밀번호를 한번 더 입력하세요'
                type="password"
                {...register("confirm",)}
              />
              <Button size="size2">회원가입</Button>

            </SignUpWrap>
          </SignUpBox>
        </Container>
        <Footer />
      </Layout>
    </>



  )
}

export default SignUp

const Container = styled.div`
    box-shadow: 3px 5px 5px 1px gray;
    width: 100%;
    height: 70rem;
    background-color: #F9EBD7 ;
    padding: 30px;
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

const SignUpBox = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    /* border: 1px solid #293991; */
    width: 40rem;
    height: 64rem;
    margin: auto;
`

const SignUpWrap = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    height: 55rem;
    padding:20px;
    gap: 1rem;
    border: 1px solid #293991;
    margin-bottom: 3rem;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    /* background-color: #293991; */
    input{
      height: 5rem;
      width: 100%;
    }
`