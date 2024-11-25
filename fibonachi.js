function fibSequence(count) {
    let fibSequence = new Array(count);

    if (count > 0) fibSequence[0] = 0; 
    if (count > 1) fibSequence[1] = 1;
    for (let i = 2; i < count; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }
    
    return fibSequence;
}

let numbersToPrint = 10;
console.log(`Перші ${numbersToPrint} чисел Фібоначчі:`, fibSequence(numbersToPrint));