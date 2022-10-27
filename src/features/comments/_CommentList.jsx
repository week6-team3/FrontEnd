// import { useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import styled from "styled-components";
// import { __addComments, __deleteComments, __getComments, __upDateComments } from "../../redux/modules/commentsSlice";


// const _CommentList = () => {
//   const {id} = useParams();
//   const dispatch = useDispatch();
//   const { comments } = useSelector((state) => state.comments);
//   console.log("comment", comments);
//   const contentRef = useRef();

//   useEffect(() => {
//     dispatch(__getComments());
//   }, [dispatch]);

//   const comment = comments.find((comment) => comment.postId === +id)
//   console.log("??",comment)

//   const newComments = comments?.filter((comments) => comments.postId === Number(id))
//   console.log(newComments)

//   const onClick = () => {
//     const content = contentRef.current.value;
//     dispatch(__addComments({ content, postId: comment.postId}));
//   };

//   return (
//     <div>
//       <StInput
//         type="text"
//         ref={contentRef}
//         placeholder="댓글을 입력해 주세요."
//         maxLength="50"
//       />
//       <StbuttonInput onClick={onClick}>댓글작성</StbuttonInput>
//       <StBox>
//       {newComments.map((value) => {
//         return (
//           <div key={value.id}>
//             <StComment>{value.content}</StComment>
//             <ButtonGroup>
//             <Deletbtn
//               onClick={() => {
//                 dispatch(__deleteComments(value.id));
//               }}
//             >
//               삭제
//             </Deletbtn>
//             <Editbtn
//               onClick={() => {
//                 dispatch(__upDateComments({
//                     id: value.id,
//                     content: contentRef.current.value,
//                   })
//                 );
//               }}
//             >
//               수정
//             </Editbtn>
//           </ButtonGroup>
//           </div>
//         );
//       })}
//       </StBox>
//     </div>
//   );
// };

// export default _CommentList
// const StInput = styled.input`
//   width: 77.5%;
//   height: 35px;
//   padding: 0 20px;
//   margin: 0 auto;
//   margin-top: 220px;
//   margin-left: 10px;
//   border: 2px solid #eee;
//   border-radius: 10px;
//   cursor: pointer;
// `;

// const StbuttonInput = styled.button`
//   width: 100px;
//   height: 30px;
//   padding: 0 20px;
//   margin-top: 10px;
//   margin-left: 20px;
//   border: 2px solid #eee;
//   border-radius: 40px;
//   cursor: pointer;
// `;

// const ButtonGroup = styled.div`
//   margin-left:80%;
//   margin-top:-5%;
//   display:flex;
// `;

// const Deletbtn = styled.button`
//   width: 70px;
//   height: 30px;
//   border: 2px solid #eee;
//   border-radius: 40px;
//   cursor: pointer;
// `;

// const Editbtn = styled.button`
//   width: 70px;
//   height: 30px;
//   border: 2px solid #eee;
//   border-radius: 40px;
//   cursor: pointer;

// `;

// const StComment = styled.div`
//   width: 78%;
//   height: 40px;
//   padding: 0 20px;
//   margin-top: 10px;
//   margin-left: 10px;
//   border: 2px solid #293991;
//   border-radius: 10px;
//   cursor: pointer;
//   font-size: medium;
// `;

// const StBox = styled.div`
// width: 100%;
// height: 225px;
// overflow-x: hidden;
// overflow-y: auto;
// &::-webkit-scrollbar{
//   width: 7px
// }
// &::-webkit-scrollbar-thumb {
//   background: #293991;
//   border-radius: 10px;
// }
// `