import React from 'react'
import styled from 'styled-components'
import Swal from 'sweetalert2'


const CategorieInfo = () => {

    const onClickDt = (e) => {
        e.preventDefault()
        Swal.fire({
            title: '국내여행 필수품!',
            text: '신용카드, 핸드폰충전기, 보조베터리, 마스크',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }


    const onClickOt = (e) => {
        e.preventDefault()
        Swal.fire({
            title: '해외여행 필수품!',
            text: '여권, 환전금액, 비행기티켓, 마스크, 볼펜',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }

    const onClickInfo = (e) => {
        e.preventDefault()
        Swal.fire({
            title: '기내반입 금지 물품!',
            text: '👜수화물 금지 👉 보조베터리, 라이터, 전자담배, 위험물품 ✈️기내반입 금지 👉 도끼,망치 등 공구류, 무기류, 레저용품',
            imageUrl: 'https://www.epnnews.com/news/photo/201907/1961_2128_4039.jpg',
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }
    return (
        <InfoHeader>
            <Btn onClick={onClickDt}>국내여행 뭘 챙길까?!</Btn>
            <Btn onClick={onClickOt}>해외여행 뭘 챙길까?!</Btn>
            <Btn onClick={onClickInfo}>기내반입 금지 물품!</Btn>
        </InfoHeader>
    )
}

export default CategorieInfo

const InfoHeader = styled.div`
    box-shadow: 3px 5px 5px 1px gray;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    height:5rem;
    border-bottom: 1px solid gray;
    background-color:#F9EBD7;
    gap: 4rem;
    `
const Btn = styled.button`
    width: 15rem;
    height: 3rem;

    background-color:#F9EBD7;
    border: none;
    
    &:hover{
        /* background-color:#fce8cd; */
        box-shadow: 1px 1px 2px gray;
        -webkit-transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
        border: none;
        border-bottom: 3px solid #293991;
    }
    
`