import * as React from 'react';
import {Route, Routes, Navigate } from 'react-router-dom';

import { Menu } from '../Menu/Menu';
import { Timer } from '../Timer/Timer';
import { Stopwatch } from '../Stopwatch/Stopwatch';

import style from './TimeControl.module.scss'; 


export const TimeControl = () => {
    const [header, changeHeader] = React.useState(localStorage.getItem('activeButton') || "Таймер");
    const [isButtonsBlocked, toggleIsButtonsBlocked] = React.useState(false);
    return (
        <div className={style["container"]}>
            <div className={style["time-control"]}>
                <h1 className={style["time-control__header"]}>{header}</h1>
                <Menu changeHeader={changeHeader} isButtonsBlocked = {isButtonsBlocked}/>
                <div className={style["time-control__content"]}>
                    <Routes>
                        <Route path="/" element={ <Navigate to="/timer" /> }/>
                        <Route path="/timer" element={<Timer isButtonsBlocked = {isButtonsBlocked} 
                            toggleIsButtonsBlocked={toggleIsButtonsBlocked}/>} />
                        <Route path="/stopwatch" element={<Stopwatch isButtonsBlocked = {isButtonsBlocked} 
                            toggleIsButtonsBlocked={toggleIsButtonsBlocked}/>} />
                    </Routes>
                </div>
                
            </div>
        </div>
    
    );
}
