import { CommentsDisabled } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { __getCheckList } from '../../redux/modules/checkListSlice'
import Checks from './Checks'



const CheckList = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { checkList } = useSelector(state => state.checkList)
    console.log("cL", checkList)
    console.log("id", id)

    useEffect(() => {
        dispatch(__getCheckList())
    }, [dispatch])

    return (
        <div>

            <h1>😢날 잊지 말아줘..😢</h1>
            <div>
                <div>
                    {checkList.filter(check => !check.isDone).map(check => <Checks key={check.id} check={check} />)}
                </div>
            </div>
            <ListLine />
            <h1>😭고..고마워..!😭</h1>
            <div>
                <div>
                    {checkList.filter(check => check.isDone).map(check => <Checks key={check.id} check={check} />)}
                </div>
            </div>



        </div>
    )
}

export default CheckList

const ListLine = styled.div`
    margin: 45px auto;
    border-bottom: 2px solid #463f6b;

`