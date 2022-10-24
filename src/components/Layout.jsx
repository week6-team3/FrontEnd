
import React from "react";
import styled from "styled-components";

const Layout = (props) => {
    return (

        <LayoutWrap>{props.children}</LayoutWrap>

    );
};

export default Layout;

const LayoutWrap = styled.div`
    max-width: 1200px;
    min-width: 800px;
    width:80rem;
    margin:50px auto;
    background-color: violet;
    border-radius: 15px;
`