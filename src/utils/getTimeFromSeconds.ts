export const getTimeFromSeconds = (num: number) => {
    let hours = Math.floor(num / 3600);
    let minutes = Math.floor((num - 3600 * hours) / 60);
    let seconds = num - 3600 * hours - 60 * minutes;

    return {hours, minutes, seconds};
};
