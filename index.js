// Write your solution here!
const cats =["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph){
    cats.push(Ralph)
    return cats
}
function destructivelyPrependCat(Bob){
    cats.unshift(Bob)
    return cats
}
function destructivelyRemoveLastCat(Bob, Garfield){
    cats.pop(Bob, Garfield)
    return cats
}
function destructivelyRemoveFirstCat(Milo){
    cats.shift(Milo)
    return cats
}
function appendCat(Broom){
    const Broom_1=[...cats,Broom]
    return Broom_1
}
function prependCat(Arnold){
    const Arnold_unshift=[Arnold,...cats]
    return Arnold_unshift
}
function removeLastCat(){
    const Broom = cats.slice(0,cats.length-1);
    return Broom;
}

function removeFirstCat(){
    const Arnold = cats.slice(1);
    return Arnold;
}