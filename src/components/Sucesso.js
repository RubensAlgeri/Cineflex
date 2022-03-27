import axios from 'axios';
import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from "react-router-dom";
import Rodape from './Rodape';

export default function Sucesso(){
    const { state } = useLocation();
    const {nome, cpf, ids, data} = state;
    console.log("sucesso ",nome, cpf, ids, data.day)

    return(
        <Confirmacao>
            <h2>Pedido feito com sucesso!</h2>
            <div>
                <p className='titulo'>Filme e sessão</p>
                <p className='info'>{data.movie.title}</p>
                <p className='info'>{data.day.date+ " "+ data.name}</p>
                <p className='titulo'>Ingressos</p>
                {ids.map(id=>{
                    <p className='info'>Assento {id}</p>
                })}
                <p className='titulo'>Comprador</p>
                <p className='info'>Nome: {nome}</p>
                <p className='info'>Cpf: {cpf}</p>
            </div>
            <Link to="/">
                <p>Voltar pra Home</p>
            </Link>
        </Confirmacao>
    )
}

const Confirmacao = styled.div`
margin-top: 67px;

h2{
    padding: 20px;
    font-family: 'Roboto',sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    margin-bottom: 12px;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #247A6B;
}
div{
    margin-left: 28px;
}
.titulo{
    margin-top: 13px;
    font-family: 'Roboto',sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;

    color: #293845;
}
.info{
    font-family: 'Roboto',sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;

    color: #293845;
}
a{
    margin-top: 62px;
    text-decoration: none;
    display: flex;
    justify-content: center;
}
a p{
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    
    font-family: 'Roboto',sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #FFFFFF;

}
`