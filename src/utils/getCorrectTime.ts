export const getCorrectTime = (num: number): number => {
    if(num < 0){
        return 59;
    }else if(num > 59){
        return 0
    }else{
        return num
    }
}