import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { __addCheckList } from '../../redux/modules/checkListSlice'

import Button from '../../elem/button'

import styled from 'styled-components'
import Swal from 'sweetalert2'



const AddCheckForm = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const intialstate = {
        content: "",
        isDone: false,
        postId: +id,
    }

    const [check, setCheck] = useState(intialstate);

    const onChangHandler = (e) => {
        setCheck({ ...check, content: e.target.value })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (check.content === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '빈칸을 입력해주세요!😥',
            })
        }
        if (check.content.trim() === "") return;
        dispatch(__addCheckList({ ...check }))
        setCheck(intialstate)
    }



    return (
        <CheckForm>
            <input maxLength="20" type="text" placeholder="목록을 적어주세요!" value={check.content} onChange={onChangHandler} />
            <Button size="size1" onClick={onSubmitHandler}>추가</Button>
        </CheckForm>
    )
}

export default AddCheckForm

const CheckForm = styled.form`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    
    height: 5rem;

    

    /* background-color: purple; */
    input{
        width:80%;
        height:3rem;
        background-color: #F9EBD7;
        border:none;
        border-right : 2px solid #293991;
        border-bottom: 2px solid #293991;

        font-size: 2rem;
    }
    button{
        margin-left: 2rem;
        margin-right: -3rem;
    }
`