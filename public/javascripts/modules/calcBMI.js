'use strict';
//計算BMI 

function calcBMI(height,weight){
    let result= weight/((height/100)*(height/100));
    //取到小数第二位
    let BMI = Math.floor(result*100)/100;
    return BMI;
}

export{
    calcBMI
}