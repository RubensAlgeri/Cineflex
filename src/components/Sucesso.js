import axios from 'axios';

export default function Sucesso(){
    
    useEffect(() => {
    const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many")
    promise.then((resposta) => {
        setFilmes(resposta.data)
    })
    promise.catch()
}, []);

    return(
        <></>

    )
}