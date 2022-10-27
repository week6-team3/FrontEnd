import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import styled from 'styled-components';
import Swal from 'sweetalert2';
import Button from '../elem/button';
import { getCookieToken } from '../shared/cookie';

const Categorie = () => {


    const navigate = useNavigate()

    // const createSubmit = (e) => {
    //     e.preventDefault()
    //     if (getCookieToken('AccessToken') !== undefined) {
    //         navigate('/create/add')
    //     } else {
    //         Swal.fire(
    //             '로그인 해주세요!',
    //             '로그인 후 이용 가능합니다!',
    //             'warning'
    //         )
    //         navigate('/users/login')
    //     }
    // }

    return (
        <SubHeader>
            <Button id="btn" size='size2' onClick={()=>navigate('/create/add')} >
                게시글 작성
            </Button>
        </SubHeader>

    );
}

export default Categorie

const SubHeader = styled.div`
    box-shadow: 3px 5px 5px 1px gray;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid gray;
    background-color:#F9EBD7;
    width: 100%;
    height: 6rem;
    #btn{
        width: 9rem;
        margin-right: 3rem;
    }
    `

const Airplane = styled.section`
    .cities {
    position: relative;

    &::after {
      content: '';
      display: table;
      clear: both;
    }

    .city {
      padding: 20px 18px;
      float: left;

      &:nth-child(2) {
        float: right;
      }

      strong {
        font-size: 40px;
        font-weight: 300;
        line-height: 1;
      }

      small {
        margin-bottom: 0px;
        margin-left: 3px;
      }
    }
    .airplane {
      position: absolute;
      width: 30px;
      height: 25px;
      top: 57%;
      left: 30%;
      opacity: 0;
      transform: translate(-50%, -50%);
      animation: move 4s infinite;
    }
}
`
