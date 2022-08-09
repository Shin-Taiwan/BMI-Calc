'use strict';
//計算體重對應的顏色
function calcColor(judgementResult){
    let color = "";
    switch(judgementResult){          
        case '過輕':
            color='thin';
            break;

        case '理想':
            color='good';
            break;

        case '過重':
            color='fat';
            break;

        case '輕度肥胖':
            color='lightFat';
            break;

        case '中度肥胖':
            color='tooFat';
            break;

        case '重度肥胖':
            color='extrimeFat';
            break;
    }   
    return color;
}
export{
    calcColor
}