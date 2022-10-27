import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import styled from 'styled-components'
import Swal from 'sweetalert2'
import { __addComments } from '../../redux/modules/commentsSlice'


const AddCommentForm = () => {
const dispatch = useDispatch()
const { id } = useParams
console.log("params", id)

  const intialstate = {
    content: "",
    postId: +id,
  }
  console.log("postId", intialstate.postId)

  const [comment, setComment] = useState(intialstate);
  console.log("intialstate",intialstate)

  const onChangeHandler = (e) => {
    setComment({ ...comment, content: e.target.value })
    console.log(e.target.value)
}


const onSubmitHandler = (e) => {
  e.preventDefault()
  if (comment.content === "") {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '빈칸을 입력해주세요!',
      })
  }
  if (comment.content.trim() === "") return;
  dispatch(__addComments({ ...comment }))
  setComment(intialstate)
}

  return (
    <form>
    <input
    type="text"
    maxLength="50"
    placeholder="댓글을 입력해 주세요."
    value={comment.content}
    onChange={onChangeHandler}
    />
    <button onClick={onSubmitHandler}>저장하기</button>
    </form>
  )
}

export default AddCommentForm