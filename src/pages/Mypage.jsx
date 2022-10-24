import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  __addCheckList,
  __getCheckList,
  __deleteCheckList,
  __upDateCheckList,
} from "../redux/modules/commentsSlice";
import Likes from "../features/comments/Likes";

const Mypage = () => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);
  console.log("comment", comments); // "comment"는 그냥 이름임
  const contentRef = useRef();

  useEffect(() => {
    dispatch(__getCheckList());
  }, []);

  const onClick = () => {
    // 데이터 추가
    const content = contentRef.current.value;

    dispatch(__addCheckList({ content }));
  };

  return (
    <div>
      <StBtnContainer>
        <Stbutton>백팩</Stbutton>
        <Stbutton>캐리어</Stbutton>
        <Stbutton>기내반입 물품 안내</Stbutton>
      </StBtnContainer>

      <StInput
        type="text"
        ref={contentRef}
        placeholder="댓글을 입력해 주세요."
        maxLength="50"
      />
      <Stbutton onClick={onClick}>댓글작성</Stbutton>

      {comments.map((value) => {
        return (
          <div key={value.id}>
            <p>{value.content}</p>
            <button
              onClick={() => {
                dispatch(__deleteCheckList(value.id));
              }}
            >
              삭제
            </button>
            <button
              onClick={() => {
                dispatch(
                  __upDateCheckList({
                    id: value.id,
                    content: contentRef.current.value,
                  })
                );
              }}
            >
              수정
            </button>
            <Likes/>
          </div>
        );
      })}
    </div>
  );
};

export default Mypage;

const StBtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StInput = styled.input`
  width: 300px;
  height: 50px;
  padding: 0 20px;
  margin-top: 40px;
  border: 2px solid #eee;
  border-radius: 20px;
  cursor: pointer;
`;

const Stbutton = styled.button`
  width: 100px;
  height: 50px;
  padding: 0 20px;
  margin-top: 40px;
  border: 2px solid #eee;
  border-radius: 40px;
  cursor: pointer;
`;
