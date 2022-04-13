import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"

// Rotas Publicas
import Teste from "./pages/Navbar";
import Index from "./pages/Index";
import Projetos from "./pages/Projetos";

export default function Rotas() {
    return(
        <BrowserRouter>
            <Teste/>   
            <Routes>
                <Route path="/" element={<Index/>} />
                <Route path="/projetos" element={<Projetos/>} />
            </Routes>
        </BrowserRouter>
    );
}