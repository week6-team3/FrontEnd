import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { __addCheck, __deletePosts, __editPosts, __getPosts } from '../redux/modules/postsSlice'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import AddCheckForm from '../features/checks/AddCheckForm'
import CheckList from '../features/checks/CheckList'

import styled from 'styled-components'
import Swal from 'sweetalert2'
import Categorie from '../components/Categorie'
import CategorieInfo from '../components/CategorieInfo'
import { __sharePost } from '../redux/modules/sharingsSlice'

// import { __getCheckList } from '../redux/modules/checkListSlice'



const MypageDetail = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { id } = useParams();
    const { posts } = useSelector((state) => state.posts);
    const post = posts.find((post) => post.id === +id)
    console.log("po", post)

    const [isEdit, setIsEdit] = useState(false)
    const [editPost, setEditPost] = useState({
        title: post?.title
    })


    useEffect(() => {
        dispatch(__getPosts())
    }, [dispatch])

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
                navigate("/mypage/:id")
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
        dispatch(__editPosts({ ...post, ...editPost }))
        setIsEdit(false)
    }
    console.log("share", post)
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
                dispatch(__sharePost({ postId: post.id }))
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
                        <div>
                            <button onClick={() => setIsEdit(prev => !prev)} >{isEdit ? "취소" : "수정"}</button>
                            <button onClick={onDeleteHandler}>삭제하기</button>
                        </div>
                        {!isEdit ? <div><h1>{post?.title}</h1></div> : null}
                        {isEdit ?
                            <div>
                                <input type="text" value={editPost.title} onChange={(e) => { setEditPost({ ...editPost, title: e.target.value }) }} />
                                <button onClick={onEditHandler} >저장</button>
                            </div>
                            : null}

                        <h2>아래부터 체크리스트</h2>
                        <AddCheckForm />
                        <CheckList />
                        <button onClick={sharePost}>공유하기</button>
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
    height: 70rem;
    background-color: #F9EBD7 ;
    padding: 30px;
`

const DetailBox = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: nowrap;
    align-items: center;

    width: 50%;
    height:100%;
    margin: auto;
    border: 1px solid #293991
`
