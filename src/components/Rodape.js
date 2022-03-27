import styled from 'styled-components';
import React from 'react';


export default function Rodape(infos){
    const{info} = infos;
    const {titulo, poster, horario, diaSemana} = info
    return (
        <Footer>
        <div>
            <img src={poster} alt={titulo} />
        </div>
        {horario?
        <p>{titulo}<br/>{diaSemana} - {horario}</p>
        :
        <p>{titulo}</p>
        }
    </Footer>
    )
}
const Footer = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 117px;
    left: 0;
    bottom: 0;

    background: #DFE6ED;
    border: 1px solid #9EADBA;
div{
    width: 64px;
    height: 89px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
}
img{
    width: 48px;
    height: 72px;
}
p{
    margin-left: 14px;
    font-family: 'Roboto',sans-serif;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;

    color: #293845;
}
small{

}
`