import Container from '../Container/Container';
import style from './Footer.module.css';
import {ReactComponent as VkIcon } from '../img/vk.svg';
import {ReactComponent as TelegramIcon } from '../img/tg.svg';
import {ReactComponent as StumbIcon } from '../img/stumbleupon.svg';
import {ReactComponent as PintestIcon } from '../img/pinterest.svg';


const Footer = () => (
    <footer className={style.footer}>
        <Container>
            <div className={style.wrapper}>
                <div className={style.contacts}>
                    <p>Design: <a href='https://t.me/Mrshamallowww'>Anastasia Ilina</a></p>
                    <p>Сoder: <a href='https://github.com/alexboagreek/happy-holiday'>alexboagreek</a></p>
                    <p>© HBCard, 2022</p>
                </div>
                <ul className={style.social}>
                    <li className={style.item}>
                        <a href="#" className={style.link}><VkIcon /></a>
                    </li>
                    <li className={style.item}>
                        <a href="#" className={style.link}><TelegramIcon/></a>
                    </li>
                    <li className={style.item}>
                        <a href="#" className={style.link}><PintestIcon/></a>
                    </li>
                    <li className={style.item}>
                        <a href="#" className={style.link}><StumbIcon /></a>
                    </li>
                </ul>
            </div>
            
        </Container>
    </footer>
);

export default Footer;