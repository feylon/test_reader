function randomer(myinteger){
    let a = [];
    for( let i = 0; i < myinteger;){
        let newrandom = Math.trunc(Math.random()*myinteger );
        if(!a.includes(newrandom)){
            a.push(newrandom);i++
        }
    }
    return a;
}
console.log(randomer(10))