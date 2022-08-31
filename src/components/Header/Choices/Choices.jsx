import React, {useState} from 'react';
import style from './Choices.module.css';

const holidays = {
    newyear: 'Новый год',
    birthdayWomen: 'День рождения  Ж',
    birthdayMen: 'День рождения  М',
    womenday: '8 марта',
    knowledgeday: 'День знаний',
};

const Choices = () => {
    const [isOpenChoices, setIsOpenChoices] = useState(false);
    const [holiday, setHoliday] = useState('Выбрать праздник');


    const toggleChoices = () => {
        setIsOpenChoices(!isOpenChoices);
    };

    const changeHoliday = title => {
        setHoliday(title);
        toggleChoices();
    };

    return (
        <div className={style.wrapper}>
            <button onClick={toggleChoices} className={style.button}>
                {holiday}
            </button>
           {isOpenChoices && (
             <ul  className={style.list}>
             {Object.entries(holidays).map(item => (
                 <li 
                    onClick={() => {
                        changeHoliday(item[1])
                    }}
                    className={style.item} 
                    key={item[0]}>{item[1]}
                 </li>
             ))}
         </ul>
           )}
        </div>
      
    )
}

export default Choices;