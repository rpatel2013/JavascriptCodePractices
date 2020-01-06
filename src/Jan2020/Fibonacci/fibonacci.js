export default function fibonacci(n) {
    const fibonacciSequence = [1];

    if(n == 1)
    {
        return fibonacciSequence;
    }

    let currValue = 1;
    let PrevValue = 0;

    for(let i = n-1; i > 0; i--)
    {
        fibonacciSequence.push(currValue + PrevValue);

        currValue += PrevValue;
        PrevValue = currValue - PrevValue;        
    }
    return fibonacciSequence;
}