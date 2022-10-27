import React from "react";
import { useDispatch } from "react-redux";
import {
    __deleteCheckList,
    __editCheckList,
} from "../../redux/modules/checkListSlice";

import Button from "../../elem/button";
import styled from "styled-components";

const Checks = ({ check, isHome = false }) => {
    const dispatch = useDispatch();

    const onDeleteHandler = () => {
        dispatch(__deleteCheckList(check?.id))
    }
    const onEditHandler = () => {
        dispatch(__editCheckList({ id: check?.id, data: { isDone: !check?.isDone } }))
    }

    return (
        <>
            <CheckWrap>
                <p>{check?.content}</p>
                <div>
                    <Button size="size1" onClick={onEditHandler}>{check?.isDone ? "챙김" : "챙겨"}</Button>
                    <Button id="btn" size="size1" onClick={onDeleteHandler}>삭제</Button>
                </div>
            </CheckWrap>
        </>
    )
}
export default Checks;

const CheckWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 3rem;
  margin-top: 2rem;
  p {
    font-size: 2rem;
    padding: 2rem;
  }
  #btn {
    margin-left: 1rem;
  }
`;
