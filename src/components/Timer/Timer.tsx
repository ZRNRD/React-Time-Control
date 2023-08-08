import * as React from 'react';

import bell from '../../images/alarm/bell.svg'
import style from './Timer.module.scss'; 

import {getCorrectNum} from '../../utils/getCorrectNum.ts'

export const Timer = () => {
    return (
    <div className={style["timer"]}>

        <div className={style["timer__alarm"]}>
            <img src={bell} alt="bell icon" className={style["timer__alarm__icon"]}></img>
            <input type="button" className={style["timer__alarm-stop"]} value="ОСТАНОВИТЬ"></input>
        </div>

        <div className={style["timer__nums"]}>
            <div className={style["timer__hours"]}>
                <input type="button" className={style["num__up"]} value="&#5169;"></input>
                <p className={style["num"]}>{getCorrectNum(0)}</p>
                <input type="button" className={style["num__down"]} value="&#5167;"></input>
                <p>часы</p>
            </div>
            <div className={style["timer__minutes"]}>
                <input type="button" className={style["num__up"]} value="&#5169;"></input>
                <p className={style["num"]}>{getCorrectNum(0)}</p>
                <input type="button" className={style["num__down"]} value="&#5167;"></input>
                <p>минуты</p>
            </div>
            <div className={style["timer__seconds"]}>
                <input type="button" className={style["num__up"]} value="&#5169;"></input>
                <p className={style["num"]}>{getCorrectNum(0)}</p>
                <input type="button" className={style["num__down"]} value="&#5167;"></input>
                <p>секунды</p>
            </div>
        </div>
        <div className={style["timer__buttons"]}>
            <input type="button" className={style["timer__start"]} value="ПУСК"></input>

            <input type="button" className={style["hide"]} value="СБРОС"></input>
            <input type="button" className={style["hide"]} value="ПАУЗА"></input>
        </div>
    </div>
    );
}