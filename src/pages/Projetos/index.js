import { React, useRef } from 'react';
import carousel1 from '../../assets/images/carousel1.jpg';
import carousel2 from '../../assets/images/carousel2.jpg';
import carousel3 from '../../assets/images/carousel3.jpg';
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

    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    return(
        <Div>
            <Carousel ref={carousel}>
                <Img src={carousel2} className="bg-image"/>
                <Img src={carousel1} className="bg-image"/>
                <Img src={carousel3} className="bg-image"/>
            </Carousel>
            {/* <div style={{ display: 'flex', flexDirection: 'row'}}>
                <Button onClick={handleLeftClick}>
                    <GoChevronLeft/>
                </Button>
                <Button onClick={handleRightClick}>
                    <GoChevronRight/>
                </Button>
            </div> */}
        </Div>
    );
}