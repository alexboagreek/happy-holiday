import React, { useContext } from 'react';
import { imgContext } from './../../context/imgContext';
import CardBG from '../../components/img/card-bg.jpg';

const ImageItem = (props) => {
    const {urlImg} = useContext(imgContext);
    return (
        <img src={urlImg || CardBG} width={840} height={520}  alt="Фон открытки" />
    ) 
}

export default ImageItem;