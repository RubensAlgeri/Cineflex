import axios from 'axios';

export default function Finalizar(){
    const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/showtimes/ID_DA_SESSAO/seats")
    promise.then()
    promise.catch()
    return(
        <></>
    )
}