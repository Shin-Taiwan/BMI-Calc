'use strict';
//計算體位

function calcJudgment(BMI){

    let judgment = "";

    BMI < 18.5 ? judgment = "過輕"
    : BMI<25 ? judgment = "理想"
    : BMI<30 ? judgment = "過重"
    : BMI<35 ? judgment = "輕度肥胖"
    : BMI<40 ? judgment = "中度肥胖"
    : "重度肥胖"
     return judgment;
}
export{
    calcJudgment
}