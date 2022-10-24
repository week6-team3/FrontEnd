
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
    margin: auto;
    background-color: violet;
`