import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { AppContext } from '../../routes/AppContext';

const Footer = () => {
    return (
        <>
        <footer>
        <div className="container">
            <AboutUs/>
            <Quicklinks/>
            <Services/>
            <ContactUs/>
        </div>
        </footer>
        <Bottom/>
        </>
    )
    
}

const AboutUs = () => {
    return (
        <div className="sec aboutus">
            <h2>О нас</h2>
            <p>Мы являемся крупным автодилером, предлагающим широкий выбор автомобилей различных марок и моделей. С нашими высококвалифицированными сотрудниками и дружественным обслуживанием мы гарантируем отличный опыт покупки автомобиля.</p>
            <ul className="sci">
                <li><a href='https://www.vk.com/'><i className="fa fa-vk" aria-hidden="true"></i> </a></li>
                <li><a href='https://www.youtube.com/'><i className="fa fa-youtube-play" aria-hidden="true"></i> </a></li>
            </ul>
        </div>
    )
}

const Quicklinks = observer(() => {
    const {user} = useContext(AppContext)
    return (
        <div className="sec quicklinks">
            <h2>Профиль</h2>
            <ul>
                {user.isAuth ? (
                <li><Link to='/user'>Мой профиль</Link></li>
                ) : (
                <>
                <li><Link to='/login'>Войти</Link></li>
                <li><Link to='/register'>Зарегистрироваться</Link></li>
                </>
                )}
                {user.isAdmin ? (<li><Link to='/admin'>Админ-панель</Link></li>) : ("")}
            </ul>
        </div>
    )
})

const Services = () => {
    return (
        <div className="sec quicklinks">
            <h2>Услуги</h2>
            <ul>
                <li><Link to='/cars'>Автомобили в наличии</Link></li>
                <li><Link to='/service'>Сервис</Link></li>
            </ul>
        </div>
    )
}

const ContactUs = () => {
    return (
        <div className="sec contact">
            <h2>Контакты</h2>
            <ul className="info">
                <li>
                    <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                    <span>78 Вернадского проспект,<br/>Москва, 117513,<br/>Россия</span>
                </li>
                <li>
                    <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                    <p><a href="tel:+79871234567">+7 987 123-45-67</a><br/><a href="tel:+79871234567">+7 987 123-45-67</a></p>
                </li>
                <li>
                    <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                    <p><a href="mailto:example@mail.ru">example@mail.ru</a></p>
                </li>
            </ul>
        </div>
    )
}

const Bottom = () => {
    return (
        <div className="copyrightText">
            <p>Copyright © 2023 Student MIREA. All Rights Reserved</p>
        </div>
    )
}

export default Footer;