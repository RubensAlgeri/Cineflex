import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Topo from "./Topo";
import Filmes from "./Filmes"
import Sessoes from "./Sessoes"
import Finalizar from "./Finalizar"
import Sucesso from "./Sucesso"


export default function App(){
    return(
		<BrowserRouter>
		<Topo />
			<Routes>
				<Route path="/" element={<Filmes />} />
				<Route path="/filme/:idFilme" element={<Sessoes />} />
				<Route path="/sessao/:idSessao" element={<Finalizar />} />
				<Route path="/sucesso" element={<Sucesso />} />
			</Routes>
		</BrowserRouter>
    )
}