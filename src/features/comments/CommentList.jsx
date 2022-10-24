import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __addComments, __deleteComments, __getComments, __upDateComments } from "../../redux/modules/commentsSlice";

const CommentList = () => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);
  console.log("comment", comments); // "comment"는 그냥 이름임
  const contentRef = useRef();

  useEffect(() => {
    dispatch(__getComments());
  }, []);

  const onClick = () => {
    // 데이터 추가
    const content = contentRef.current.value;

    dispatch(__addComments({ content }));
  };

  return (
    <StDetailBox>
      <StInput
        type="text"
        ref={contentRef}
        placeholder="댓글을 입력해 주세요."
        maxLength="50"
      />
      <Stbutton onClick={onClick}>댓글작성</Stbutton>
      <StBox>
      {comments.map((value) => {
        return (
          <div key={value.id}>
            <StComment>{value.content}</StComment>
            <button
              onClick={() => {
                dispatch(__deleteComments(value.id));
              }}
            >
              삭제
            </button>
            <button
              onClick={() => {
                dispatch(__upDateComments({
                    id: value.id,
                    content: contentRef.current.value,
                  })
                );
              }}
            >
              수정
            </button>
          </div>
        );
      })}
      </StBox>
    </StDetailBox>
  );
};

export default CommentList

const StInput = styled.input`
  width: 300px;
  height: 50px;
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 40px;
  border: 2px solid #eee;
  border-radius: 20px;
  cursor: pointer;
`;

const Stbutton = styled.button`
  width: 100px;
  height: 20px;
  padding: 0 20px;
  margin-top: 40px;
  border: 2px solid #eee;
  border-radius: 40px;
  cursor: pointer;
`;

const StComment = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 50px;
  padding: 0 20px;
  margin-top: 10px;
  border: 2px solid #293991;
  border-radius: 20px;
  cursor: pointer;
  font-size: large;
`;

const StDetailBox = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: nowrap;
    align-items: center;

    width: 70%;
    height:100%;
    margin: auto;
    border: 1px solid #293991
`

const StBox = styled.div`
width: 90%;
margin: 0 auto;
height: 280px;
margin-top: 300px;
overflow-x: hidden;
overflow-y: auto;
&::-webkit-scrollbar{
  width: 8px
}
&::-webkit-scrollbar-thumb {
  background: #293991;
  border-radius: 10px;
}
`