import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import Categorie from './Categorie';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <BarWrap>
                <AppBar id="Bar" position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <span href="/">나 두고 갈거야..?</span>
                        </Typography>
                        <Button className='btn' id="btn1" color="inherit" href="/users/login/">로그인</Button>
                        <Button className='btn' id="btn2" color="inherit" variant="outlined" href="/users/sign_up/">회원가입</Button>
                    </Toolbar>
                </AppBar>
            </BarWrap>

            {/* <SubHeader>
                <Button variant="outlined">국내여행</Button>
                <Button id="btn3" variant="outlined">해외여행</Button>
            </SubHeader> */}
        </Box>
    );
}


export default Header

const BarWrap = styled.div`
    #Bar{
        box-shadow: 3px 5px 5px 1px gray;
        background-color: #293991;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
`
// const SubHeader = styled.div`
//     width: 100%;
//     height: 4rem;
//     background-color:#F9EBD7;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     border-bottom: 1px solid gray;
//     Button{
//         color: black;
        
//     }
//     #btn3 {
//         margin-left: 20px;
//     }
// `














// import React from 'react'
// import { Button } from '@material-ui/core';
// import styled from 'styled-components';
// import { StyledEngineProvider } from '@mui/styled-engine'
// const Header = () => {
//     return (
//         <Headerwrap>

//             <span href="/">로고</span>
//             <BtnBox>
//                 <StyledEngineProvider injectFirst>
//                     <Button className='btn' id="btn1" color="inherit" href="/users/login/">로그인</Button>
//                     <Button className='btn' id="btn2" color="inherit" variant="outlined" href="/users/sign_up/">회원가입</Button>
//                 </StyledEngineProvider>
//             </BtnBox>
//             <div>

//             </div>

//         </Headerwrap>
//     )
// }

// export default Header

// const Headerwrap = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-content: center;
//     justify-content: space-between;
//     align-items: center;
//     width: 100rem;
//     height: 6rem;
//     margin:10rem auto;

//     background-color: white;
// `

// const BtnBox = styled.div`
//     .btn{
//         font-size: 16px;
//     }
//     #btn1{
//         margin-right: 10px;
//     }
// `