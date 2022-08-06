export const debounce = (func: Function, waitTime: number) => {
    let timerId: NodeJS.Timeout;
    return((...args: any[]) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => func.apply(this, args), waitTime);
    });
}