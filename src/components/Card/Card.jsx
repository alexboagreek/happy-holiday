import React from 'react';
import style from './Card.module.css';
import ImageItem from '../ImageItem/ImageItem';
import Felicitation from '../Felicitation/Felicitation';
import CardBG from '../../components/img/card-bg.jpg';

const Card = () => {
    return (
        <div className={style.card}>
            <div className={style.wrapper}>
                <div className={style.image}>
                    <ImageItem img={CardBG}/>
                    <Felicitation />
                </div>
            </div>
        </div>
    );
}
export default Card;