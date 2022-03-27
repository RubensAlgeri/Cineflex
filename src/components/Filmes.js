import axios from 'axios';
import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Filmes() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((resposta) => {
            setFilmes(resposta.data)
        })
        promise.catch()
    }, []);

    return (
        <>
            <TopoFilme>
                <p>Selecione o filme</p>
            </TopoFilme>
            <Posters>
                {filmes.map(filme =>
                <Link to={`/filme/${filme.id}`}>
                    <Poster >
                        <img src={filme.posterURL} alt={filme.title} />
                    </Poster>
                </Link>
                )}
            </Posters>
        </>

    )
}
const Posters = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
`

const Poster = styled.div`
    display: flex;
    margin-bottom: 11px;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
img{
    width: 129px;
    height: 193px;
}
`

const TopoFilme = styled.div`
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