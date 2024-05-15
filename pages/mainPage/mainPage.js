import React from 'react';
import mainPage from './mainPage.module.css';
import map from "./mainPages.images/backheader.png";
import dom from "./mainPages.images/dom.png";
import tg from "./mainPages.images/tg.png";
import inst from "./mainPages.images/inst.png";
import minsk from "./mainPages.images/minsk.png";
import brest from "./mainPages.images/brest.png";

const MainPage = () => {
    return (
        <div>
            <div className={mainPage.nav}>
                <div className={mainPage.menu}>
                    <ul>
                        <li>ВОЗМОЖНОСТИ</li>
                        <li>T & T</li>
                        <li>ПОПУЛЯРНОЕ</li>
                    </ul>
                    <div className={mainPage.buttons}>
                        <center>
                            <button id="signupButton">
                                <p>РЕГИСТРАЦИЯ</p>
                            </button>
                            <button id="signinButton">
                                <p>ВХОД В АККАУНТ</p>
                            </button>
                        </center>
                    </div>
                </div>

                <div>
                    <div className={mainPage.text}>
                        <p id="t4"><b>ВОЗМОЖНОСТИ</b></p>
                        <p>Мы предлагаем большой спектр</p>
                        <p>функций, которые вам доступны, а</p>
                        <p>именно</p>
                    </div>
                    <div className={mainPage.blocks}>
                        <div className={mainPage.poss1}>
                            <center>
                                <img src={dom}/>
                                <p id="t5"><b>Просмотр</b></p>
                                <p id="t6"><b>достопримечательностей</b></p>
                                <p>Вы можете выбрать любую</p>
                                <p>страну или город на свой вкус,</p>
                                <p>просмотреть ее знаменитые</p>
                                <p>памятники архитектуры, музеи и</p>
                                <p id="t7">так далее</p>
                            </center>
                        </div>
                        <div className={mainPage.poss2}>
                            <center>
                                <img src={map}/>
                                <p id="t5"><b>Составление</b></p>
                                <p id="t5"><b>туристических</b></p>
                                <p><b>маршрутов</b></p>
                                <p>Вы можете выбрать любые</p>
                                <p>достопримечательности из списка и</p>
                                <p>составить из них свой маршрут</p>
                                <p>памятники архитектуры, музеи и</p>
                                <p>самостоятельно</p>
                            </center>
                        </div>
                        <div className={mainPage.poss3}>
                            <center>
                                <p id="t5"><b>Визуализация</b></p>
                                <p id="t6"><b>маршрутов на карте</b></p>
                                <p>Вы можете пользоваться</p>
                                <p>Яндекс.Картами для того, чтобы</p>
                                <p>визуализировать свой маршрут и</p>
                                <p>ставить на нем метки</p>
                            </center>
                        </div>
                    </div>
                </div>

                <div className={mainPage.info}>
                    <div className={mainPage.text1}>
                        <p>ПОПУЛЯРНЫЕ ГОРОДА</p>
                        <p>Мы собрали список самых популярных городов и достопримечательностей Беларуси для ваших
                            незабываемых путешествий</p>
                        <div className={mainPage.blocks1}>
                            <div className={mainPage.city1}>
                                <img src={minsk}/>
                                <p>Минск</p>
                            </div>
                            <div className={mainPage.city2}>
                                <img src={brest}/>
                                <p>Брест</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr/>
                <footer>
                    <div className={mainPage.logo}>
                        <p>T & T</p>
                    </div>
                    <div className={mainPage.links}>
                        <img src={tg}/>
                        <img src={inst}/>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default MainPage;
