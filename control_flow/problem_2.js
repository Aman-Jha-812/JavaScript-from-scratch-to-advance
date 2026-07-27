// first problem saving
let saving = 0;
const target = 500;

while(saving < target){
    saving += 100;
    console.log(`Current saving : ${saving}$`);
    
}
 console.log("Target reached!")

// second problem A child insists on playing a game at least one and then continues as long as they have energy.

let energy = 5;

do{
    console.log("playing the game");
    energy--;
}while(energy>0);

console.log("Game over. I'm tired!")

//until you find a book

const books = ["Math","Science","History","English"];
const booktofind = "History";

for(let i =0;i<books.length;i++){
    if(books[i]==booktofind){
        console.log(`Found the book: ${books[i]}`)
        break;
    }
}
// print all number from 1 to 10, but skip even number

for(let i = 1 ; i<=10; i++){
    if(i%2===0){
        continue;
    }
    console.log(`odd number: ${i}`)
}