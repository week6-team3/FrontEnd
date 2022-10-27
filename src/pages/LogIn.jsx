
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { __loginDB } from '../redux/modules/usersSlice'
import { setAccessToken, setRefreshToken } from '../shared/cookie'
import Api from '../shared/Api'
import { api } from '../shared/aips'
import instance from '../shared/aips'

import Categorie from '../components/Categorie'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'

import styled from 'styled-components'
import Swal from 'sweetalert2'



const LogIn = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm()



    //일반 로그인버튼
    const onClickLogin = async (data) => {
        const info = {
            email: data.email,
            password: data.password
        }
        try {
            const response = await Api.post('/login', info) //{ withCredentials: true }
            console.log("acc", response.data)
            if (response.data?.loginUserResult === undefined) {
                Swal.fire({
                    icon: "error",
                    title: "다시 확인해주세요!",
                    text: "아이디 또는 비밀번호가 틀렸습니다.",
                });
                throw new Error("에러메세지")
            }
            setAccessToken(response.data.loginUserResult.AccessToken);
            setRefreshToken(response.data.loginUserResult["RefreshToken"]); //["RefreshToken"]
            const AccessToken = response.data.loginUserResult
                .AccessToken
            const RefreshToken = response.data.loginUserResult
                .RefreshToken
            const NickName = response.data.loginUserResult.usernickname
            localStorage.setItem("AccessToken", AccessToken);
            localStorage.setItem("RefreshToken", RefreshToken);
            localStorage.setItem("nickname", NickName);
            console.log("data", response.data)
            if (response.data.message === "로그인을 성공하셨습니다!") {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: '로그인에 성공하였습니다!',
                    showConfirmButton: false,
                    timer: 1000
                })
                navigate("/");
            }
        } catch (error) {
            console.log(error)
        }

    }


    const onSubmit = (data) => {
        console.log("dd", data)

        dispatch(__loginDB(data))
        window.alert("환영합니다!")
        navigate('/')
    }

    const signin = (data) => {
        // axios.defaults.withCredentials = true;

        Api.post("/login", data)
            .then((res) => {
                console.log("cookie", res);
                const AccessToken = res.data.loginUserResult
                    .AccessToken
                const RefreshToken = res.data.loginUserResult
                    .RefreshToken
                localStorage.setItem("AccessToken", AccessToken);
                localStorage.setItem("RefreshToken", RefreshToken);
                if (res.data.message === "로그인되었습니다.") {
                    navigate("/");
                }
            })
            .catch((error) => {
                console.log(error);
                if (error.code === "ERR_BAD_REQUEST") {
                    Swal.fire({
                        icon: "error",
                        title: "다시 확인해주세요!",
                        text: "아이디 또는 비밀번호가 틀렸습니다.",
                    });
                }
            });
    };





    return (
        <>
            <Layout>
                <Header />
                <Categorie />
                <Container>
                    <LoginBox>
                        <TitleBox>
                            <p>나만의 체크리스트를 위한 로그인</p>
                        </TitleBox>

                        <CreateWrap onSubmit={handleSubmit(onClickLogin)}>
                            <div>
                                <h2>Email</h2>
                                <input type="email" placeholder='이메일을 입력해주세요!'
                                    {...register("email",
                                    )}
                                />
                                {/* {errors.email && errors.email.type === "pattern" && <p style={{ color: "red" }}>이메일 형식이 아닙니다!</p>} */}
                            </div>
                            <div>
                                <h2>Password</h2>
                                <input type="password"
                                    {...register("password",
                                    )}
                                    placeholder='비밀번호를 입력해주세요!' />
                                {/* {errors.password && errors.password.type === "pattern" && <p style={{ color: "red" }}>영문, 숫자, 특수문자 혼합하여 8~20자리로 입력해주세요!</p>} */}
                            </div>
                            <button type='submit' >Log In</button>
                            <div>
                                <p>아직 회원이 아니신가요?</p><Link to="/users/sign_up">회원가입 하러 가기</Link>
                            </div>
                        </CreateWrap>
                    </LoginBox>
                </Container>
                <Footer />
            </Layout>
        </>
    )
}
// { required: "Email is required", pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i, }
// { required: "Password is required", pattern: /(?=.*\d{1,50})(?=.*[~`!@#$%&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/ }
// 
export default LogIn

const Container = styled.div`
    box-shadow: 3px 5px 5px 1px gray;
    width: 100%;
    height: 70rem;
    background-color: #F9EBD7 ;
    padding: 30px;
`
const LoginBox = styled.div`
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
const CreateWrap = styled.form`
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
    
`