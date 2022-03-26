import axios from 'axios';
import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Rodape from './Rodape';

export default function Sessoes(){
    const { idFilme } = useParams();
    const [horarios, setHorarios] = useState([]);


    useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
    promise.then((resposta) => {
        console.log(resposta.data.days)
        setHorarios(resposta.data.days)
    })
    promise.catch()
}, []);

    return(
        <>
            <TopoSessao>
                <p>Selecione o horário</p>
            </TopoSessao>
            {horarios.map(horario =>
                <Data>
                    <p>{horario.weekday} - {horario.date}</p>
                    <div>
                        {horario.showtimes.map(sessao=>
                        <Link to={`/sessao/${sessao.id}`}>
                            <span>{sessao.name}</span>
                        </Link>
                            )}
                    </div>
                </Data>
            )}
            <Rodape></Rodape>
        </>

    )
}

const Data = styled.div`
p{
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    margin-bottom: 22px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    margin-left: 24px;
    letter-spacing: 0.02em;
    color: #293845;
}
div{
    display: flex;
    align-items: center;
    margin-left: 24px;
}
span{
    margin-right: 8px;
    margin-bottom: 24px;
    width: 82px;
    height: 43px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;

    background: #E8833A;
    border-radius: 3px;

    color: #FFFFFF;
}
`
    const TopoSessao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 110px;
    margin-top: 67px;
p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #293845;
}
`