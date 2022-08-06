export const debounce = (func: Function, waitTime: number) => {
    let timerId: NodeJS.Timeout;
    return((...args: any[]) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => func.apply(this, args), waitTime);
    });
}

export const removeFromArray = (array: Array<any>, val: any) => {
    const index = array.indexOf(val);
    if (index > -1) {
        array.splice(index, 1);
    }
}