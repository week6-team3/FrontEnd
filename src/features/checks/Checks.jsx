import React from 'react'
import { useDispatch } from 'react-redux'
import { __deleteCheckList, __editCheckList } from '../../redux/modules/checkListSlice'

const Checks = ({ check }) => {
    const dispatch = useDispatch()

    const onDeleteHandler = () => {
        dispatch(__deleteCheckList(check.id))
    }
    const onEditHandler = () => {
        dispatch(__editCheckList({ id: check.id, data: { isDone: !check.isDone } }))
    }

    return (
        <>
            <div>
                <p>{check.content}</p>
                <button onClick={onEditHandler}>{check.isDone ? "(    )" : "( ✔️ )"}</button>
                <button onClick={onDeleteHandler}>삭제</button>
            </div>
        </>

    )
}

export default Checks