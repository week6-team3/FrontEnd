import React from 'react'
import styled from 'styled-components'

const Create = () => {
    return (
        <Stcontainer>
        <StTitleBox>title : 어디로 여행</StTitleBox>
        <div>
        <Stbutton>국내</Stbutton>
        <Stbutton>해외</Stbutton>
        </div>
        <StBox/>
        <Stbutton>만들기</Stbutton>
        </Stcontainer>
    )
}

export default Create

const Stcontainer = styled.div`
  width: 512px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`
const StTitleBox = styled.div`
  width: 200px;
  height: 60px;
  padding: 0 20px;
  margin-top: 40px;
  border: 2px solid #eee;
  border-radius: 20px;
  cursor: pointer;
`
const StBox = styled.div`
  width: 400px;
  height: 400px;
  padding: 0 20px;
  margin-top: 40px;
  border: 2px solid #eee;
  border-radius: 20px;
  cursor: pointer;
`

const Stbutton = styled.button`
  width: 200px;
  height: 60px;
  padding: 0 20px;
  margin-top: 40px;
  border: 2px solid #eee;
  border-radius: 40px;
  cursor: pointer;
`