import React, { useContext } from 'react';
import { imgContext } from './../../context/imgContext';

const ImageItem = (props) => {
    const img = useContext(imgContext);
    return (
        <img width={840} height={520} src={props.img} alt="Фон открытки" />
    ) 
}

export default ImageItem;