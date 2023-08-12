import * as React from 'react';

import style from './Timer.module.scss'; 

import { getCorrectNum } from '../../utils/getCorrectNum';
import { getTimeFromSeconds } from '../../utils/getTimeFromSeconds';

export const Timer = () => {
    const [time, changeTime] = React.useState(0);

    return (
    <div className={style["timer"]}>

        <div className={style["timer__alarm"]}>
            
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className={style["timer__alarm__icon"]} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z" ></path></svg>
            <input type="button" className={style["timer__alarm-stop"]} value="ОСТАНОВИТЬ"></input>
        </div>

        <div className={style["timer__nums"]}>
            <div className={style["timer__hours"]}>
                <input type="button" className={style["num__up"]} value="&#5169;" onClick={()=>changeTime(time + 3600)}></input>
                <p className={style["num"]}>{getCorrectNum(getTimeFromSeconds(time).hours)}</p>
                <input type="button" className={style["num__down"]} value="&#5167;" 
                    onClick={
                        ()=>time >= 3600 && changeTime(time - 3600)}></input>
                <p>часы</p>
            </div>
            <div className={style["timer__minutes"]}>
                <input type="button" className={style["num__up"]} value="&#5169;" onClick={()=>changeTime(time + 60)}></input>
                <p className={style["num"]}>{getCorrectNum(getTimeFromSeconds(time).minutes)}</p>
                <input type="button" className={style["num__down"]} value="&#5167;" 
                    onClick={
                        ()=>time >= 60 && changeTime(time - 60)}></input>
                <p>минуты</p>
            </div>
            <div className={style["timer__seconds"]}>
                <input type="button" className={style["num__up"]} value="&#5169;" onClick={()=>changeTime(time + 1)}></input>
                <p className={style["num"]}>{getCorrectNum(getTimeFromSeconds(time).seconds)}</p>
                <input type="button" className={style["num__down"]} value="&#5167;" 
                    onClick={
                        ()=>time > 0 && changeTime(time - 1)}></input>
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
