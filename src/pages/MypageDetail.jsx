import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { __addCheck, __deletePosts, __detailPosts, __editPosts, __getPosts } from '../redux/modules/postsSlice'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import AddCheckForm from '../features/checks/AddCheckForm'
import CheckList from '../features/checks/CheckList'
import Button from '../elem/button'

import styled from 'styled-components'
import Swal from 'sweetalert2'
import CategorieInfo from '../components/CategorieInfo'
import { __sharePost } from '../redux/modules/sharingsSlice'
import { getCookieToken } from '../shared/cookie'

// import { __getCheckList } from '../redux/modules/checkListSlice'



const MypageDetail = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { id } = useParams();
    const { posts } = useSelector((state) => state.posts);
    console.log("posts", posts)
    const post = posts.find((post) => post?.postId === +id)
    console.log("po", post)
    const cookie = getCookieToken('AccessToken')

    const [isEdit, setIsEdit] = useState(false)
    const [editPost, setEditPost] = useState({
        title: post?.title
    })


    useEffect(() => {
        dispatch(__getPosts())
    }, [dispatch])

    // useEffect(() => {
    //     dispatch(__detailPosts(+id));
    // }, [dispatch, id])

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


    const onDeleteHandler = (e) => {
        e.stopPropagation()
        Swal.fire({
            title: '삭제할까요?',
            text: '게시글을 삭제 하겠시겠어요?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(__deletePosts(post.id))
                Swal.fire(
                    '삭제 완료!',
                    '게시글이 삭제 되었어요!',
                    'success'
                )
                navigate("/mypage")
            }
        })
    }

    const onEditHandler = (e) => {
        e.preventDefault()
        if (editPost.title === "") { //바디나 타이틀에 빈칸이 있을때
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '모두 입력해주세요!😥',
            })
        }
        if (editPost.title.trim() === "") return;
        dispatch(__editPosts({ ...editPost }))
        setIsEdit(false)
    }

    const sharePost = (e) => {
        e.preventDefault()
        Swal.fire({
            title: '공유할까요?',
            text: '게시글을 공유 하겠시겠어요?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Share'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(__sharePost({ postId: +id }))
                Swal.fire(
                    '공유 완료!',
                    '게시글이 공유 되었어요!',
                    'success'
                )
                navigate("/")
            }
        })

    }


    // const [check, setCheck] = useState("")

    // const onCheckHandler = (e) => {
    //     setCheck(e.target.value)
    //     console.log("c", check)
    // }

    // const submitCheck = (e) => {
    //     e.preventDefault()
    //     dispatch(__addCheck({ id: +id, data: { checkList: [...post.checkList, { content: check, id: Date.now() }] } }))
    //     setCheck("")


    // }

    return (
        <>
            <Layout>
                <Header />
                <CategorieInfo />
                <Container>
                    <DetailBox>
                        <TitleBox>
                            <div>
                                {!isEdit ? <div><h1>{post?.title}</h1></div> : null}
                                {isEdit ?
                                    <div>
                                        <input type="text" value={editPost?.title} onChange={(e) => { setEditPost({ ...editPost, title: e.target.value }) }} />
                                        <Button size="size1" onClick={onEditHandler} >저장</Button>
                                    </div>
                                    : null}
                            </div>
                            <div>
                                <Button size="size1" onClick={() => setIsEdit(prev => !prev)} >{isEdit ? "취소" : "수정"}</Button>
                                <Button size="size1" onClick={onDeleteHandler}>삭제</Button>
                            </div>
                        </TitleBox>

                        <CheckListWrap>
                            <AddCheckForm />
                            <CheckList />
                        </CheckListWrap>
                        <Btn onClick={sharePost}>공유하기</Btn>
                    </DetailBox>
                </Container>
                <Footer />
            </Layout>
        </>
    )
}

export default MypageDetail

const Container = styled.div`
    
    box-shadow: 3px 5px 5px 1px gray;
    width: 100%;
    height: 73rem;
    background-color: #F9EBD7 ;
    padding: 20px;
`

const DetailBox = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: nowrap;
    align-items: center;
    padding:10px;

    width: 80%;
    height:100%;
    margin: auto;
    /* border: 1px solid #293991; */
    border-radius: 10px;
    
    
`

const TitleBox = styled.div`
    display:flex;
    justify-content: space-between;
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

const CheckListWrap = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    height: 55rem;
    padding:20px;
    border: 1px solid #293991;
    margin-bottom: 3rem;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    /* background-color: #293991; */
`



const Btn = styled.button`
    width: 8rem;
    height: 4rem;
    background-color: #293991;
    color: white;
    border: none;
    border-radius: 10px;
    &:hover{
        background-color: #1b2661;
    }
    

`
