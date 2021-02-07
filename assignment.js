// Feet To Mile Converter
let feetToMile = function (inputFeet) {
    // 1 mile is equal to 5280 feet
    let result;
    if (inputFeet >= 0) {
        result = inputFeet / 5280;
    } else {
        result = "You Input A Negative Value (" + inputFeet + ") . Input A Positive Or Correct Value . ";
    }

    return result;
}
let checkfeetToMile = feetToMile(-10560);
console.log(checkfeetToMile);

// Wood Calculator 
let woodCalculator = function (chair, table, bed) {
    let chairWood = 1;
    tableWood = 3;
    bedWood = 5;
    let totalWood;
    if (chair >= 0 && table >= 0 && bed >= 0) {
        chair = chair * chairWood;
        table = table * tableWood;
        bed = bed * bedWood;
        totalWood = chair + table + bed + " Cubic Feet Wood Needed .";
    } else {
        totalWood = "Please Provide Positive Value . "
    }

    return totalWood;
}
let checkWoodCalculator = woodCalculator(4, 2, 2);
console.log(checkWoodCalculator);


// Brick Calculator
let brickCalculator = function (floorNumber) {
    let totalNumberBrick;
    if (floorNumber <= 10 && floorNumber > 0) {
        totalNumberBrick = (floorNumber * 15) * 1000;
    } else if (0 < floorNumber <= 20 && 0 < floorNumber > 10 && floorNumber > 0) {
        let f1to10 = (10 * 15) * 1000;
        let f10to20Temp = floorNumber - 10;
        let f10to20 = (f10to20Temp * 12) * 1000;

        totalNumberBrick = f1to10 + f10to20;
    } else if (0 < floorNumber > 20 && floorNumber > 0) {
        let f1to10 = (10 * 15) * 1000;
        let f10to20 = (10 * 12) * 1000;
        let f20temp = floorNumber - 20;
        let f20 = (f20temp * 10) * 1000;
        totalNumberBrick = f1to10 + f10to20 + f20;
    } else if (floorNumber < 0) {
        totalNumberBrick = "Sorry Floor Number Not Be In Negative Value .";
    }

    return totalNumberBrick;
}
let checkBrickCalculator = brickCalculator(-2);
console.log(checkBrickCalculator);



// Tiny Friend Name 
let nameOfFriend = ['Hriday', 'Joy', 'Hasib'];

function tinyFriend(array) {

    let tinyFriendName = array.reduce((shortestName, currentName) => {
        return currentName.length < shortestName.length ? currentName : shortestName;
    }, array[0]);
    return tinyFriendName;
}
let checkTinyFriend = tinyFriend(nameOfFriend);
console.log(checkTinyFriend);