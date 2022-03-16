// 1

for (i=1 ;i <= 7;i++){
    console.log(i);
}

// 2

for (i=5 ; i <= 25;i +=4){
    console.log(i);
};

// 3a

const wizzards = [
    "Harry Potter", 
    "Hermione Granger", 
    "Ron Weasley"
];

// 3b

for (magic of wizzards){
    console.log(magic);
};

// 4

let harryPotterMovies = 0;

// 4b & 4c

while (harryPotterMovies <= 8){
    console.log(harryPotterMovies);
    harryPotterMovies++;
}

// Bonus

// 5a

const hogwartsHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

// 5b

for (houses of hogwartsHouses){

    for (casa of houses){
        console.log(casa)
    }console.log('=====================');

};

// 6a

const quote = [
    ["Yer"],
    ['A'],
    ['Wizard'],
    ['Harry']
];

// 6b

// let hagridQuote = quote.join(" ");
// console.log(hagridQuote);


// for (all = 0, all <= 0; all++){
//     console.log(quote.join(' '));
// }



let magicQuote = ``;
for (i = 0; i < quote.length; i++){
    magicQuote += ` ${quote[i]}`
}
magicQuote = magicQuote.trim();
console.log(magicQuote);


// 7
//Inspired by FizzBuzz

for (x=1 ; x <= 25;x++){
    if(x % 3 === 0 && x % 5 === 0){
        console.log(`Expecto Patronum`);
    } else if (x % 3 === 0){
        console.log(`Expecto`);
    } else if (x % 5 === 0){
        console.log(`Patronum`);
    } else {
        console.log(x);
    }
} 



