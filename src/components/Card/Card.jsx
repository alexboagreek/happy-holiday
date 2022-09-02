import React from 'react';
import style from './Card.module.css';
import ImageItem from '../ImageItem/ImageItem';
import Felicitation from '../Felicitation/Felicitation';


const Card = () => {
    return (
        <div className={style.card}>
            <div className={style.wrapper}>
                <div className={style.image}>
                    <ImageItem />
                    <Felicitation />
                </div>
            </div>
        </div>
    );
}
export default Card;