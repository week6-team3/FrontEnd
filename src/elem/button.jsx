// import React from "react";
// import styled, { css } from "styled-components";

// export default function Button({ children, ...restProps }) {
//     return <Btn {...restProps}>{children}</Btn>;
// }

// const Btn = styled.button`
//   height: 40px;
//   border-radius: 10px;
//   ${({ size }) => {
//         switch (size) {
//             case "size1":
//                 return size1;
//             case "size2":
//                 return size2;
//             case "size3":
//                 return size3;
//             default:
//                 break;
//         }
//     }}
// `;

// export const size1 = css`
//     background-color: #FDC676;
//     min-width: 87px;
//     min-height:40px;
//     width: 30%;
//     height: 10%;
//     margin-top:15px;
//     border-radius: 5px;
//     border: none;
//     &:hover{
//         background-color: #f7be67;
//     }
//     cursor: pointer;
// `;
// export const size2 = css`
//     background-color: #FDC676;
//     min-width: 40px;
//     min-height:30px;
//     width: 13%;
//     height: 10%;
//     border-radius: 5px;
//     border: none;
//     margin-left: 10px;
//     &:hover{
//     background-color: #f7be67;
//     }
//     cursor: pointer;
// `;
// export const size3 = css`
//   background-color: #FDC676;
//     min-width: 30px;
//     min-height:30px;
//     width: 13%;
//     height: 10%;
//     border-radius: 5px;
//     border: none;
//     margin-left: 10px;
//     &:hover{
//     background-color: #f7be67;
//     }
//     cursor: pointer;
// `;