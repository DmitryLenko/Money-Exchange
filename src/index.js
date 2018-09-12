// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
var object = {}
const H = 50;
const Q = 25;
const D = 10;
const N = 5;
const P = 1;

   if(currency <= 0) {
       return object;
   } else if(currency > 10000) {
       return object = {error: "You are rich, my friend! We don't have so much coins for exchange"}
   } else {
        if(currency >= H) {
            object.H = count(currency,H);
            currency = remainder(currency,H);
        }
        if(currency >= Q) {
            object.Q = count(currency,Q);
            currency = remainder(currency,Q);
        } 
        if(currency >= D) {
            object.D = count(currency,D);
            currency = remainder(currency,D);
        }
        if(currency >= N) {
            object.N = count(currency,N);
            currency = remainder(currency,N);
        } 
        if(currency >= P) {
            object.P = count(currency,P);
            currency = remainder(currency,P);
        }
        return object;
   }
}

function count(currency,a) {
    var b = Math.floor(currency/a);
    return b.toFixed();
}

function remainder(currency,a) {
    return currency%a;
}