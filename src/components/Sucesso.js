import axios from 'axios';

export default function Sucesso(){
    const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many")

    promise.then()
    promise.catch()
    return(
        <></>

    )
}