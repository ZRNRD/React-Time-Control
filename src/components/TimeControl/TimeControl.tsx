import * as React from 'react';
import {Route, Routes, Navigate } from 'react-router-dom';

import { Menu } from '../Menu/Menu';
import { Timer } from '../Timer/Timer';
import { Stopwatch } from '../Stopwatch/Stopwatch';

import style from './TimeControl.module.scss'; 


export const TimeControl = () => {
    const [header, changeHeader] = React.useState("Таймер");
    return (
        <div className={style["container"]}>
            <div className={style["time-control"]}>
                <h1 className={style["time-control__header"]}>{header}</h1>
                <Menu changeHeader={changeHeader}/>
                <div className={style["time-control__content"]}>
                    <Routes>
                        <Route path="/" element={ <Navigate to="/timer" /> }/>
                        <Route path="/timer" element={<Timer />} />
                        <Route path="/stopwatch" element={<Stopwatch />} />
                    </Routes>
                </div>
                
            </div>
        </div>
    
    );
}
