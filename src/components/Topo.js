import styled from 'styled-components';
import React from 'react';

export default function Topo(){
    return(
        <Header>
            <h1>CINEFLEX</h1>
        </Header>
    )
}
const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 67px;
    background-color: #C3CFD9;

h1{
    font-family: 'Roboto', sans-serif;

    font-size: 34px;
    line-height: 40px;
    text-align: center;

    color: #E8833A;
}
`