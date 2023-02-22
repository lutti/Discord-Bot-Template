function AcharNumeroNoArray(arr: string[]) : number | null {
    for (let i = 0; i < arr.length; i++) {
        const num = parseInt(arr[i]);
        if (!isNaN(num)) {
            return num;
        }
    }
    return null;
}

export default AcharNumeroNoArray;