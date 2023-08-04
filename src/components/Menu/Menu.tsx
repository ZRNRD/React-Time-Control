import * as React from 'react';

import style from './Menu.module.scss'; 

export const Menu = () => {
    const [showMenu, isShowMenu] = React.useState(false);
    return (
    <div className={style["menu"]}>
        <div className={showMenu ? style["menu__items-show"] : style["menu__items"]}>
            <input type="button" className={style["menu__item-active"]} value="Таймер"></input>
            <input type="button" className={style["menu__item"]} value="Секундомер"></input>
        </div>
        <input type="button" className={style["menu-show"]} value="Меню" onClick={()=>{isShowMenu(!showMenu)}}></input>
    </div>
);
}