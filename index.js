// Code your solutions in this file

function writeCards(names,eventName){
    let allCards =[];
    for(let i=0; i < names.length; i++){
        
        allCards.push('Thank you, ' + names[i] + ', for the wonderful ' + eventName + ' gift!');
    }
    return allCards;
}


function countDown(number){
    while(number >= 0)
    {
        console.log(number);
        number--;
    }
}