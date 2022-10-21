// import { Container } from "@mui/material";
import React from "react";
// import styled from "styled-components";

const Layout = (props) => {
    return (
        // <Container style={{ width: "" }} fixed>
        <div>{props.children}</div>
        // </Container>
    );
};

export default Layout;