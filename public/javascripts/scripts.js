'use strict';
import { calcBMI } from "./modules/calcBMI.js";
import { calcJudgment } from "./modules/calcJudgment.js"
import { calcColor } from "./modules/calcColor.js"
import { Record } from "./class/records.js"
//init
createRecordList();

//DOM
let calc = document.querySelector('.header-button-js');
let resultPTag = document.querySelector('.header-p-js');
let resultImg = document.querySelector('.header-img-js');
let deleteItem = document.querySelector('.section-button-js')


//Listener
calc.addEventListener("click",controller,false);
resultImg.addEventListener("click",()=>location.reload(),false)
deleteItem.addEventListener("click",()=>{localStorage.clear();createRecordList()},false)

//controller
function controller(){
    let height = document.querySelector('input[name="height"]').value;
    let weight = document.querySelector('input[name="weight"]').value;
    let invalid = document.querySelector('.form-group-js');
    
    invalid.textContent="";

    try {
        if(isNaN(Number(height)) || isNaN(Number(weight))) {
            throw new Error("錯誤！！請輸入數字");
        }
    } catch (error) {
        invalid.textContent=error;
        return;
    }
    try {
        if ( height<=0 || weight<=0){
            throw new Error("錯誤！！請輸入0以上的數字");
        }
    } catch (error) {
        invalid.textContent=error;
        return;
    }

    updateBotton(height,weight);
    setJsonToLocalStorage(height,weight);
    createRecordList();
}

//更新按鈕
function updateBotton(height,weight){
    let BMI = calcBMI(height,weight);
    let judgment = calcJudgment(BMI);
    let buttoncolor = calcColor(judgment);

    calc.innerHTML=`${BMI}</br><small>BMI</small>`;
    resultPTag.innerHTML=`<span class="text-${buttoncolor}">${judgment}</span>`;
    calc.setAttribute("class",`d-block rounded-circle bg-primary border-${buttoncolor} text-${buttoncolor} mt-4 ml-md-3  header-button-js header-button_border`);
    resultImg.setAttribute("class",`position-absolute header-img-js header-img d bg-cover d-block rounded-circle border-primary border bg-${buttoncolor}`);
}

//儲存Json到Local Storage
function setJsonToLocalStorage(height,weight){
    let data = JSON.parse(localStorage.getItem('BMIRecord')) || [];
    let BMI = calcBMI(height,weight)
    
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    
    data.push(new Record(BMI,calcJudgment(BMI),height,weight,`${date}-${month + 1}-${year}`))

    localStorage.setItem('BMIRecord',JSON.stringify(data));
}

//更新BMI紀錄
function createRecordList(){
    let data = JSON.parse(localStorage.getItem('BMIRecord')) || [];
    let str = '';
    let color = '';
    for(let item of data){
        color = calcColor(item['judgment']);

        str +=`
        <div class="col-8 shadow border-left border-${color} main-border-width mb-3">
            <ul class="list-unstyled d-md-flex justify-content-between mb-0 p-2 text-center">
                <li class="text-md-left mx-auto mx-md-0" style="width: 70px;">${item['judgment']}</li>
                <li class="text-md-left mx-auto mx-md-0" style="width: 70px;"><small class="mr-1">BMI</small>${item['BMI']}</li>
                <li><small class="mr-1">weight</small>${item['weight']}</li>
                <li><small class="mr-1">height</small>${item['height']}</li>
                <li class="text-md-right mx-auto mx-md-0" style="width: 80px;><small class="mr-1">${item['date']}</small></li>
            </ul>       
        </div>
        `
    }
    document.querySelector('.record').innerHTML=str;
}


