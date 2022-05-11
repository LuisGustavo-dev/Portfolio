import { React } from 'react';
import wallpaper from '../../assets/images/Home.jpg';
import { BiCircle } from 'react-icons/bi';
import { 
    Div,
    Img,
    Circle,
} from "./style";

export default function Home() {
    return(
        <Div>
            <Img src={wallpaper} alt="wallpaper"></Img>
            <Circle>
                <BiCircle></BiCircle>
                <BiCircle></BiCircle>
                <BiCircle></BiCircle>
            </Circle>
        </Div>
        
    );
}