import * as React from 'react';

import bell from '../../images/alarm/bell.svg'
import style from './Timer.module.scss'; 

import { getCorrectNum } from '../../utils/getCorrectNum.ts';
import { getCorrectTime } from '../../utils/getCorrectTime.ts';

export const Timer = () => {
    const [hours, changeHours] = React.useState(0);
    const [minutes, changeMinutes] = React.useState(0);
    const [seconds, changeSeconds] = React.useState(0);

    return (
    <div className={style["timer"]}>

        <div className={style["timer__alarm"]}>
            <img src={bell} alt="bell icon" className={style["timer__alarm__icon"]}></img>
            <input type="button" className={style["timer__alarm-stop"]} value="ОСТАНОВИТЬ"></input>
        </div>

        <div className={style["timer__nums"]}>
            <div className={style["timer__hours"]}>
                <input type="button" className={style["num__up"]} value="&#5169;" onClick={()=>changeHours(getCorrectTime(hours + 1))}></input>
                <p className={style["num"]}>{getCorrectNum(hours)}</p>
                <input type="button" className={style["num__down"]} value="&#5167;" onClick={()=>changeHours(getCorrectTime(hours - 1))}></input>
                <p>часы</p>
            </div>
            <div className={style["timer__minutes"]}>
                <input type="button" className={style["num__up"]} value="&#5169;" onClick={()=>changeMinutes(getCorrectTime(minutes + 1))}></input>
                <p className={style["num"]}>{getCorrectNum(minutes)}</p>
                <input type="button" className={style["num__down"]} value="&#5167;" onClick={()=>changeMinutes(getCorrectTime(minutes - 1))}></input>
                <p>минуты</p>
            </div>
            <div className={style["timer__seconds"]}>
                <input type="button" className={style["num__up"]} value="&#5169;" onClick={()=>changeSeconds(getCorrectTime(seconds + 1))}></input>
                <p className={style["num"]}>{getCorrectNum(seconds)}</p>
                <input type="button" className={style["num__down"]} value="&#5167;" onClick={()=>changeSeconds(getCorrectTime(seconds - 1))}></input>
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