import React from "react";
import styled, { css } from "styled-components";

export default function Button({ children, ...restProps }) {
    return <Btn {...restProps}>{children}</Btn>;
}

const Btn = styled.button`
  height: 40px;
  border-radius: 10px;
  ${({ size }) => {
        switch (size) {
            case "size1":
                return size1;
            case "size2":
                return size2;
            case "size3":
                return size3;
            default:
                break;
        }
    }}
`;

export const size1 = css`
    width: 7rem;
    height: 4rem;
    background-color: #293991;
    color: white;
    border: none;
    border-radius: 10px;
    &:hover{
        background-color: #1b2661;
    }
`;
export const size2 = css`
    width: 7rem;
    height: 4rem;
    background-color: #293991;
    color: white;
    border: none;
    border-radius: 5px;
    &:hover{
        background-color: #1b2661;
    }
`;
export const size3 = css`
   width: 7rem;
    height: 4rem;
    background-color: #293991;
    color: #ffffff;
    border: 2px solid white;
    border-radius: 5px;
    &:hover{
        background-color: #1b2661;
    }
`;