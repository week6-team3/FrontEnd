import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import styled from 'styled-components';
import Swal from 'sweetalert2';
import Button from '../elem/button';
import { getCookieToken } from '../shared/cookie';

const Categorie = () => {


    const navigate = useNavigate()

    const createSubmit = (e) => {
        e.preventDefault()
        if (getCookieToken('AccessToken') !== undefined) {
            navigate('/create/add')
        } else {
            Swal.fire(
                '로그인 해주세요!',
                '로그인 후 이용 가능합니다!',
                'warning'
            )
            navigate('/login')
        }
    }

    return (
        <SubHeader>

            <Button id="btn" size='size2' onClick={createSubmit} >
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


