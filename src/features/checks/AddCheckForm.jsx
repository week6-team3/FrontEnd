import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { __addCheckList } from '../../redux/modules/checkListSlice'

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
        dispatch(__addCheckList({ ...check }))
        setCheck(intialstate)
    }
    console.log("check", check)


    return (
        <div>
            <input type="text" value={check.content} onChange={onChangHandler} />
            <button onClick={onSubmitHandler}>추가하기</button>
        </div>
    )
}

export default AddCheckForm