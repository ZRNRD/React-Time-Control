import { getCorrectNum } from "./getCorrectNum";

export const getTimeFromMilliseconds = (ms: number): string => {
    let minutes = Math.floor(ms / 60000);
    let seconds = Math.floor((ms - 60000 * minutes) / 1000);
    let tenMilliseconds = (ms - 60000 * minutes - 1000 * seconds) / 10;

    return `${getCorrectNum(minutes)}:${getCorrectNum(seconds)}:${getCorrectNum(tenMilliseconds)}`;
};