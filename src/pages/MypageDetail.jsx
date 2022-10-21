import React from 'react'
import styled from 'styled-components'

const MypageDetail = () => {
    return (
        <div>
            <StBtnContainer>
            <Stbutton>백팩</Stbutton>
            <Stbutton>캐리어</Stbutton>
            <Stbutton>기내반입 물품 안내</Stbutton>
            </StBtnContainer>

            <div>챙겨야할 물품</div>
            <div>챙긴 물품</div>
        </div>
    )
}

export default MypageDetail

const StBtnContainer = styled.div`
display: flex;
justify-content: center;
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