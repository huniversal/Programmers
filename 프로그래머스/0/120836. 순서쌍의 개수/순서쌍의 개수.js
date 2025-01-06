function solution(n) {
    return Array.from({length:n+1},(v,i)=>i).filter(i=>n%i === 0).length;
}