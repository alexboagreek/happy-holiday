import React, {useState, useContext} from 'react';
import style from './Choices.module.css';
import { holidaysContext } from './../../../context/holidaysContext';


// const holidays = {
//     newyear: 'Новый год',
//     birthdayWomen: 'День рождения  Ж',
//     birthdayMen: 'День рождения  М',
//     womenday: '8 марта',
//     knowledgeday: 'День знаний',
// };

const Choices = () => {
    const [isOpenChoices, setIsOpenChoices] = useState(false);
    const {holidays, holiday, changeHoliday} = useContext(holidaysContext);

  
    const toggleChoices = () => {
        setIsOpenChoices(!isOpenChoices);
    };

    return (
        <div className={style.wrapper}>
            <button onClick={toggleChoices} className={style.button}>
                {holidays[holiday] || 'Выбрать праздник'}
            </button>
           {isOpenChoices && (
             <ul  className={style.list}>
             {Object.entries(holidays).map(item => (
                 <li 
                    onClick={() => {
                        changeHoliday(item[0]);
                        toggleChoices();
                    }}
                    className={style.item} 
                    key={item[0]}>
                        {item[1]}
                 </li>
             ))}
         </ul>
           )}
        </div>
      
    )
}

export default Choices;