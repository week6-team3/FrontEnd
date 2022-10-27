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
              <p>이메일</p>
              <input
                placeholder='이메일을 입력하세요'
                {...register("email",
                  {
                    required: "Email is required", pattern: /^[A-Za-z0-9]([-_\.]?[0-9a-zA-z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-z])*\.[a-zA-z]{2,3}$/,
                  }
                )}
              />
              {errors.email && errors.email.type === "pattern" && <p className='p2'> 이메일 형식이 아닙니다. </p>}
              <p>닉네임</p>
              <input
                placeholder='영문 숫자 조합 4글자 10글자 사이 입력하세요'
                {...register("nickname", { required: "nickname is required", pattern: /^[A-Za-z0-9]{4, 10}$/ })}
              />
              {errors.nickname && errors.nickname.type === "pattern" && <p className='p2'>영문 숫자 조합 4글자 10글자 사이 입력하세요. </p>}
              <p>패스워드</p>
              <input
                placeholder='비밀번호 4~16 영대문자, 숫자를 입력하세요'
                type="password"
                {...register("password", { required: "Password is required", pattern: /^[a-zA-Z0-9]{4,16}$/ })}
              />
              {errors.password && errors.password.type === "pattern" && <p className='p2'>비밀번호 4~16 영대문자, 숫자를 입력하세요. </p>}
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
      border: none;
      border-bottom: 3px solid #293991;
      border-right: 3px solid #293991;
      background-color: #F9EBD7;
      font-size:1.5rem;
    }
    p{
      font-size:2rem;
      margin-top: 3rem;
    }
    .p2{
      
      font-size:1.2rem;
      color: red;
    }
`