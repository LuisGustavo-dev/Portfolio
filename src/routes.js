import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"

// Rotas Publicas
import Navbar from "./pages/Navbar";
import Index from "./pages/Index";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";

export default function Rotas() {
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Index/>} />
                <Route path="/projetos" element={<Projetos/>} />
                <Route path="/contato" element={<Contato/>} />
            </Routes>
        </BrowserRouter>
    );
}