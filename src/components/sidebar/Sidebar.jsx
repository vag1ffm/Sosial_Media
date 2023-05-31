import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link из react-router-dom
import './Sidebar.css';
import {routes} from "../../routes/routes";

const Sidebar = ({sidebarOpen, }) => {

    return (
        <>
            <div className={`sidebar ${sidebarOpen ? '' : 'close'}`}>
                <div className="logo-details">
                    <Link className={'logo-details'} to={routes.news}>
                        <i className="fas fa-star w-25"></i>
                        <span className="logo_name">Respect</span>
                    </Link>

                </div>
                <ul className="nav-links">
                    <li>
                        <Link to={routes.profile}> {/* Используем Link для перехода по роуту */}
                            <i className="fas fa-user"></i>
                            <span className="link_name">Профиль</span>
                        </Link>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Category</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <Link to={routes.news}> {/* Используем Link для перехода по роуту */}
                                <i className="fas fa-newspaper"></i>
                                <span className="link_name">Новости</span>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <Link to={routes.messages}> {/* Используем Link для перехода по роуту */}
                                <i className="fas fa-envelope"></i>
                                <span className="link_name">Сообщения</span>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <Link to={routes.frineds}> {/* Используем Link для перехода по роуту */}
                            <i className="fas fa-user-friends"></i>
                            <span className="link_name">Друзья</span>
                        </Link>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Друзья</a></li>
                        </ul>
                    </li>
                    <li>
                        <Link to={routes.groups}> {/* Используем Link для перехода по роуту */}
                            <i className="fas fa-users"></i>
                            <span className="link_name">Сообщество</span>
                        </Link>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Сообщество</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <Link to={routes.music}> {/* Используем Link для перехода по роуту */}
                                <i className="fas fa-headphones-alt"></i>
                                <span className="link_name">Музыка</span>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <Link to={routes.video}> {/* Используем Link для перехода по роуту */}
                            <i className="fas fa-play"></i>
                            <span className="link_name">Видео</span>
                        </Link>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Видео</a></li>
                        </ul>
                    </li>
                    <li>
                        <Link to={routes.save}> {/* Используем Link для перехода по роуту */}
                            <i className="fas fa-bookmark"></i>
                            <span className="link_name">Закладки</span>
                        </Link>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Закладки</a></li>
                        </ul>
                    </li>
                    <li>
                        <Link to={routes.settings}> {/* Используем Link для перехода по роуту */}
                            <i className="fas fa-cog"></i>
                            <span className="link_name">Настройки</span>
                        </Link>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Настройки</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="profile-details">
                            <div className="profile-content">
                                <img src="image/profile.jpg" alt="profileImg" />
                            </div>
                            <div className="name-job">
                                <div className="profile_name">Имя юзера</div>
                                <div className="job">Профессия</div>
                            </div>
                            <i className="fas fa-sign-out-alt"></i>
                        </div>
                    </li>
                </ul>
            </div>

        </>
    );
};

export default Sidebar;
