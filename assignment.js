// prbolem 1: ana to vori
function anaToVori(ana){
    const totalVori = ana / 16;
    return totalVori;
} 
let totalAna = 160;
const totalVori = anaToVori(totalAna)
console.log(totalVori);


// problem 2:
function pandaCost(shingaraQinute, somocaQinute, jilapiQinute){
    let shingaraPrice = 7;
    let somocaPrice = 10;
    let jilapiPrice = 15;
    const totalShingara = shingaraPrice * shingaraQinute;
    const totalSomoca = somocaPrice * somocaQinute;
    const totalJilapi = jilapiPrice * jilapiQinute;
    const allPrice = totalShingara + totalSomoca + totalJilapi;
    return allPrice;
}
const myPandCostShpingPrice = pandaCost(0, 5, 3);
console.log(myPandCostShpingPrice);


// problem 3:
function picnicBudget(student){
    let firstParson100 = 5000;
    let seconParson200 = 4000;
    let thirdParson300 = 3000;

    if(student <= 100){
        const count = student * firstParson100;
        return count;
    }
    else if(student <= 200){
        const firstParson = 100 * firstParson100;
        const restParsons = student - 100;
        const secondParson = restParsons * seconParson200;
        const totalParson = firstParson + secondParson;
        return totalParson;
    }
    else{
        const firstParson = 100 * firstParson100;
        const secondParson = 100 * seconParson200;
        const restParson = student - 200;
        const thirdParshon = restParson * thirdParson300;
        const totalParshon = firstParson + secondParson + thirdParshon;
        return totalParshon;
    }
}
let allBudget = picnicBudget(220);
console.log(allBudget);


//problem 4:
function oddFriend(array){
    let num = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i].length;
        if(element % 2 != 0){
            num = array[i];
            return num;
        }
    }   
}
let friendName = ['abir', 'hasan', 'abirhasan', 'sanjida', 'tisha'];
const alloddFrend = oddFriend(friendName);
console.log(alloddFrend);