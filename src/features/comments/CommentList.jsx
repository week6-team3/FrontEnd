import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { __getComments } from "../../redux/modules/commentsSlice"
import { __detailPosts } from "../../redux/modules/postsSlice"
import Comment from "./Comment"


const CommentList = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const {comments} = useSelector((state)=>state.comments)
    console.log("commentID는?", id)

    
    
    useEffect(() => {
    dispatch(__getComments())
    }, [dispatch])
    useEffect(() => {
        dispatch(__detailPosts());
    }, [dispatch])
    
    
    
    
    
    return (
    <div>
    {comments.map((comment) => comment.postId === Number(id) ? <Comment key={comment.id} comment={comment}>댓글</Comment> : "")}
    </div>
    
    )
    }
    
    export default CommentList