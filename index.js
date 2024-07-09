function receivesAFunction (thing) {
console.log (thing ());
}
receivesAFunction (function() {return "receives a function"} );


function returnsANamedFunction (){
    return returnsANamedFunction;
}

function returnsAnAnonymousFunction (){
    return function (){return anAnonymousFunction}
} 