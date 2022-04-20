import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fundo from './images/wallpaper.jpg';
import { 
    Background,
    Img
} from "./style";

export default function Home() {
    return (
        <Background>
            <Img src={fundo} className="bg-image"/>
            
        </Background>
    );
}
