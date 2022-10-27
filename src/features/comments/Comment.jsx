import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { __deleteComments, __upDateComments } from '../../redux/modules/commentsSlice'


const Comment = ({ comment }) => {
    const dispatch = useDispatch()

    const [isEdit, setIsEdit] = useState(false)
    const [editComment, setEditComment] = useState({
        content: comment?.content
    })

    const onDeleteHandler = () => {
        dispatch(__deleteComments(comment?.id))
    }
    
    const onEditHandler = (e) => {
        e.preventDefault()
        if (editComment.content === "") {
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '모두 입력해주세요!😥',
            })
            }
            // if (editComment.content.trim() === "") return;
            dispatch(__upDateComments({ ...comment, ...editComment }))
            setIsEdit(false)
    }


    return (
    <>
    {!isEdit ? <div><p>{comment.content}</p></div> :
    <div>
        <input value={editComment.content} type="text" onChange={(e) => {setEditComment({ ...editComment, content: e.target.value})}}></input>
        <button>저장</button>
    </div>}

    <div>
        <button size="size1" onClick={onEditHandler}>
            {isEdit ? "취소" : "수정"}
        </button>
        <button size="size1" onClick={onDeleteHandler}>
            삭제
        </button>
    </div>
    </>
    )
}

export default Comment;