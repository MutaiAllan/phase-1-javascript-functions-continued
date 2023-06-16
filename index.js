function saturdayFun(param = 'roller-skate') {
    return (`This Saturday, I want to ${param}!`);
}
// console.log(saturdayFun());
// console.log(saturdayFun('code'));

function mondayWork(param = 'go to the office'){
    return (`This Monday, I will ${param}.`);
}
// console.log(mondayWork());
// console.log(mondayWork('start farming'));

function wrapAdjective(param1 = '*') {
    return function(param2 = 'special') {
        return (`You are ${param1}${param2}${param1}!`);
    }
}
const encouragingPromptFunction = wrapAdjective("!!!");
// console.log(wrapAdjective("%")("a dedicated programmer"));