import {Link} from "react-router-dom";
import React from "react";
import {Menu, Switch} from "antd";

export default function Header({authorized}) {
    return (
        <header>
            <nav>
                <Menu mode="horizontal" style={{justifyContent: 'center'}}>
                    <Menu.Item key="home">
                        <Link to={'/'}/>Главная
                    </Menu.Item>
                    {authorized ?
                        <Menu.Item key="user">
                            Пользователь
                        </Menu.Item> : (
                            <>
                                <Menu.Item key="registration">
                                    Зарегистрироваться
                                </Menu.Item>
                                <Menu.Item key="signin">
                                    Авторизоваться
                                </Menu.Item>
                            </>)}
                    <Menu.SubMenu title="Книги" key="catalog">
                        <Menu.Item key="books">
                            Каталог
                        </Menu.Item>
                        <Menu.Item key="search">
                            Расширенный поиск
                        </Menu.Item>
                        <Menu.Item key="authors">
                            Список авторов
                        </Menu.Item>
                    </Menu.SubMenu>
                    {authorized &&
                        <Menu.Item key="booked">
                            Брони
                        </Menu.Item>}
                </Menu>
            </nav>
            {/*<nav>*/}
            {/*    <ul>*/}
            {/*        <li><Link to='/'>Home</Link></li>*/}
            {/*        /!*<li><Link to='/roster'>Roster</Link></li>*!/*/}
            {/*        /!*<li><Link to='/schedule'>Schedule</Link></li>*!/*/}
            {/*    </ul>*/}
            {/*</nav>*/}
        </header>
    )
}