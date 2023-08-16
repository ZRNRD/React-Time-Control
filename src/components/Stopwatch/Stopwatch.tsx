import * as React from 'react';

import style from './Stopwatch.module.scss';
import stopwatchImage from '../../assets/images/stopwatch/Stopwatch.jpg';

import { getTimeFromMilliseconds } from '../../utils/getTimeFromMilliseconds';

export const Stopwatch = ({isButtonsBlocked, toggleIsButtonsBlocked}:any) => {
    const [isStopwatchStarted, isStopwatchStartedSet] = React.useState(false);

    const [time, setTime] = React.useState(0);
    const [stopWatchStartInterval, setstopWatchStartInterval]:[alarmInterval:any, setAlarmInterval:any] = React.useState(null);

    let stopwatchTime = time;

    const stopWatchStart = () => {
        isStopwatchStartedSet(true);
        toggleIsButtonsBlocked(true);
        setstopWatchStartInterval(setInterval(()=>{
            stopwatchTime = stopwatchTime + 10;
            setTime(stopwatchTime);
        }, 10));

    };

    const stopwatchStop = () => {
        clearInterval(stopWatchStartInterval);
        setstopWatchStartInterval(null);
        setTime(0);
        isStopwatchStartedSet(false);
        toggleIsButtonsBlocked(false);
    }

    return (
    <div className={style["stopwatch"]}>
        <div className={style["stopwatch-main"]}>
            <div className={style["stopwatch__body"]}>
                <img src={stopwatchImage} alt="stopwatchImage" />
                <div className={isStopwatchStarted ? style["spin-arrow"] : style["stopwatch__arrow"]}></div>
            </div>
            <p className={style["stopwatch__time"]}>{getTimeFromMilliseconds(time)}</p>

            {isStopwatchStarted
            ?<div className={style["stopwatch__buttons"]}>
                <input type="button" className={style["stopwatch-cancel hide"]} value="СТОП" 
                    onClick={()=>{stopwatchStop();}}></input>
                <input type="button" className={style["stopwatch-interval hide"]} value="ИНТЕРВАЛ"></input>
            </div>
            :<div className={style["stopwatch__buttons"]}>
                <input type="button" className={style["stopwatch-start"]} value="СТАРТ" 
                    onClick={()=>{stopWatchStart();}}></input>
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