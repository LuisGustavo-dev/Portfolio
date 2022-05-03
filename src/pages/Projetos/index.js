import React from 'react';
import carrosel1 from '../../assets/images/carrosel1.jpg';
import carrosel2 from '../../assets/images/carrosel2.jpg';
import carrosel3 from '../../assets/images/carrosel3.jpg';
import { 
    GoChevronLeft,
    GoChevronRight
} from 'react-icons/go';

import { 
    Div,
    Img,
    Carousel,
    Button,
} from "./style";

export default function Projetos() {

    async function handleLeftClick(){

    }

    async function handleRightClick(){

    }

    return(
        <Div>
            <Carousel>
                <Img src={carrosel2} className="bg-image"/>
                <Img src={carrosel1} className="bg-image"/>
                <Img src={carrosel3} className="bg-image"/>
            </Carousel>
            <div style={{ display: 'flex', flexDirection: 'row'}}>
                <Button onClick={handleLeftClick}>
                    <GoChevronLeft/>
                </Button>
                <Button onClick={handleRightClick}>
                    <GoChevronRight/>
                </Button>
            </div>
        </Div>
    );
}