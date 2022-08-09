class Record {
    constructor(BMI,judgment,height,weight,date){
        this.BMI = BMI
        this.judgment = judgment
        this.height = height+"cm"
        this.weight = weight+"kg"
        this.date = date
    }
}

export{
    Record
}