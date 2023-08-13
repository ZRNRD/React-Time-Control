import * as React from 'react';

import style from './Stopwatch.module.scss';
import stopwatchImage from '../../assets/images/stopwatch/Stopwatch.jpg';

export const Stopwatch = () => {
    const [isStopwatchStarted, isStopwatchStartedSet] = React.useState(false);

    return (
    <div className={style["stopwatch"]}>
        <div className={style["stopwatch-main"]}>
            <div className={style["stopwatch__body"]}>
                <img src={stopwatchImage} alt="stopwatchImage" />
                <div className={style["stopwatch__arrow"]}></div>
            </div>
            <p className={style["stopwatch__time"]}>00:00:00</p>

            {isStopwatchStarted
            ?<div className={style["stopwatch__buttons"]}>
                <input type="button" className={style["stopwatch-cancel hide"]} value="СТОП" onClick={()=>isStopwatchStartedSet(false)}></input>
                <input type="button" className={style["stopwatch-interval hide"]} value="ИНТЕРВАЛ"></input>
            </div>
            :<div className={style["stopwatch__buttons"]}>
                <input type="button" className={style["stopwatch-start"]} value="СТАРТ" onClick={()=>isStopwatchStartedSet(true)}></input>
            </div>
            }
            

        </div>
                   
        <div>
            <p className={style["stopwatch__intervals-header"]}>Интервалы:</p>
            <ol className={style["stopwatch__intervals-list"]} reversed></ol>
        </div>
    </div>
    );
}