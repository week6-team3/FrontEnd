import React from 'react'
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { StyledEngineProvider } from '@mui/styled-engine'
const Header = () => {
    return (
        <div>

            <span href="/">로고</span>
            <div>

                <Button color="secondary" href="/users/login/">로그인</Button>
                <Button color="primary" variant="outlined" href="/users/sign_up/">회원가입</Button>

            </div>

        </div>
    )
}

export default Header

// const Headerwrap = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-content: center;
//     justify-content: space-between;
//     align-items: center;
//     width: 500rem;
//     margin: auto 30px;
// `