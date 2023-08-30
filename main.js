/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/

const queens = [];
const tributeChest = [];

const createQueen = (id, name) => {
    const queenObject = {
        id: id,
        name: name
    }

    queens.push(queenObject);
}

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

const payTribute = (id, desc, queenId) => {
    const tributeObject = {
        id: id,
        desc: desc,
        queenId: queenId
    };

    tributeChest.push(tributeObject);
}

createQueen(1, "Trinity Terry");
createQueen(2, "Sydney Noh")
createQueen(3, "Christina Ashworth")
createQueen(4, "Aja Washington")

for (const queen of queens) {
    const hailMessage = hailTheQueen(queen.name);
    console.log(hailMessage)
}

payTribute(1, "A big ol bucket of porridge, so full that it's spilling everywhere. It tastes OK.", 3);
payTribute(2, "Frankincense and Myrrh - which, as we know, is just the most awesome gift of all time. They've been giving people it for so long!!", 1);
payTribute(3, "Totally rad monster truck. Queens like monster trucks, too, OK? Seriously!!", 4);

console.log(tributeChest);

for (const queen of queens) {

    for (const tribute of tributeChest) {
        if (tribute.queenId === queen.id) {
            console.log(`${queen.name} has tribute ${tribute.desc}`)    
    }
}
}