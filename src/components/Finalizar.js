import axios from 'axios';
import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Rodape from './Rodape';

export default function Finalizar(){
    const { idSessao } = useParams();
    const [assentos, setAssentos] = useState([]);
    const [selecionado, setSelecionado] = useState("disponivel");
    const [comprador, setComprador] = useState([]);
    let ids = [];

    
    useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
    promise.then((resposta) => {
        setAssentos(resposta.data.seats)
        Rodape(resposta.data);
    })
    promise.catch()
}, []);

    function escolhiAssento(selecionado, id){
        if(selecionado === "disponivel") setSelecionado('selecionado')
        else{
            setSelecionado('disponivel')
        }
        if(ids.join('').includes(id))ids.push(id);
        else{
            ids = ids.join(' ').replace(id, "").split(" ");
        }
    }

    function fazerLogin (event) {
		event.preventDefault();

		const requisicao = axios.post("https://minha-api.com/login", {
            ids: ids,
            name: comprador.nome,
            cpf: comprador.cpf
        });
        requisicao.then(()=>{
        <Link to="/sucesso"></Link>
    })
	}

    return(
        <>
            <TopoFinalizar>
                <p>Selecione o(s) assento(s)</p>
            </TopoFinalizar>
            <Assentos escolhido={selecionado.selecionado}>
                {assentos.map(assento =>
                <>
                    {assento.isAvailable?
                        <p className={selecionado} onClick={()=>escolhiAssento(selecionado, assento.id)}>{assento.name}</p>
                        :
                        <p className="indisponivel" >{assento.name}</p>
                    }
                </>
                )}
            </Assentos>
            <Assentos>
                <div>
                    <p className='selecionado'> </p>
                    <p className='disponivel'> </p>
                    <p className='indisponivel'> </p>
                    <div>
                        <em>Selecionado</em>
                        <em>Disponível</em>
                        <em>Indisponível</em>
                    </div>
                </div>
            </Assentos>
            <Entradas>
                <form onSubmit={fazerLogin}>
                    <p>Nome do comprador:</p>
                    <input 
                    type="text" 
                    placeholder='Digite seu nome...'
                    onChange={e => setComprador({nome: e.target.value})}
                    value={comprador.nome}
                    required
                    ></input>

                    <p>CPF do comprador:</p>
                    <input 
                        type="text" 
                        placeholder='Digite seu CPF...'
                        onChange={e => setComprador({CPF: e.target.value})}
                        value={comprador.CPF}
                        required
                    ></input>
                    <button type="submit">Reservar assento(s)</button>
                </form>
            </Entradas>
        </>
    )
}

const Entradas = styled.div`
margin-top: 42px;
display: flex;
justify-content: center;
p{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #293845;
}
input{
    width: 327px;
    height: 51px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 3px;
}
input::placeholder{
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #AFAFAF;
}
button{
    margin: 57px auto; 
display: flex;
justify-content: center;
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    
    color: #FFFFFF;

}
`

const Assentos = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0 auto;
max-width: 330px;
p {
    margin-right: 7px;
    margin-bottom: 18px;
    width: 26px;
    height: 26px;

    border: 1px solid #808F9D;
    box-sizing: border-box;
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #000000;
}
.disponivel{
    background: #C3CFD9;
}
.indisponivel{
    background: #FBE192;
}
.selecionado{
    background: #8DD7CF;
}
div{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
div div{
    margin-right: 10px;
    margin-top: -10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
em{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;

    color: #4E5A65;
}
`

const TopoFinalizar = styled.div`
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