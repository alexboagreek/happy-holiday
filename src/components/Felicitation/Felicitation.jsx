import style from './Felicitation.module.css';
import { useSelector } from 'react-redux';

const Felicitation = () => {
    const {text, loading} = useSelector(state => state.text);

    return (
        <p className={style.felicitation}>
            {loading === 'loading' ? 'загрузка...' :
            text === '' ? 'Займешь косарь до зп??' : text}
        </p>
    )};

export default Felicitation;