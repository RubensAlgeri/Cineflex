import axios from 'axios';

export default function Sessoes(){

    const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies/ID_DO_FILME/showtimes")
    promise.then()
    promise.catch()
    return(
        <></>

    )
}