"use strict";
console.clear();
const maleNames = ["Antonio", "Manuel", "Nuno"];
const femaleNames = ["Maria", "Ana", "Carolina"];
const maleAges = [43, 15, 22];
const femaleAges = [35, 17, 5];
const merge = () => {
    const femaleArray = femaleNames.map((val, index) => [val, femaleAges[index]]);
    // console.log(femaleArray);
    const femaleObj = Object.fromEntries(femaleArray);
    // console.log(femaleObj);
    const maleArray = maleNames.map((val, index) => [val, maleAges[index]]);
    // console.log(maleArray);
    const maleObj = Object.fromEntries(maleArray);
    // console.log(maleObj);
    const mergeObj = { ...femaleObj, ...maleObj };
    console.log(mergeObj);
    return mergeObj;
};
merge();
//# sourceMappingURL=app.js.map