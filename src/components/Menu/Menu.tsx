import * as React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Menu.module.scss'; 

export const Menu = ({changeHeader}) => {
    const [showMenu, isShowMenu] = React.useState(false);
    const [activeButton, changeActiveButton] = React.useState('Таймер');
    return (
        <div className={style["menu"]}>
            <div className={showMenu ? style["menu__items-show"] : style["menu__items"]}>
                <NavLink to="/timer">
                    <input type="button" 
                        className={activeButton === 'Таймер' ? style["menu__item-active"] : style["menu__item"]} 
                        value="Таймер"
                        onClick={()=>{changeHeader("Таймер"); changeActiveButton('Таймер'); isShowMenu(false)}}></input>
                </NavLink>
                <NavLink to="/stopwatch" >
                    <input type="button" 
                        className={activeButton === 'Секундомер' ? style["menu__item-active"] : style["menu__item"]} 
                        value="Секундомер"
                        onClick={()=>{changeHeader("Секундомер"); changeActiveButton('Секундомер'); isShowMenu(false)}}></input>
                </NavLink>
            </div>
            <input type="button" className={style["menu-show"]} value="Меню" onClick={()=>{isShowMenu(!showMenu)}}></input>
        </div>
    );
}