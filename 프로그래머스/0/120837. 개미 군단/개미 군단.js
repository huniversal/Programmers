function solution(hp) {
    let janggun = 5;
    let byengjung = 3;
    let il = 1;
    let sum = 0;
    
    a = parseInt(hp/janggun);
    b = hp%janggun
    
    c = parseInt(b/byengjung);
    d = b%byengjung
    
    e = parseInt(d/il)
    
    return a+c+e
}