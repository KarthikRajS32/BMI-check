function calculate(){
    var heightvalue = document.getElementById("height");
    var weightvalue = document.getElementById("weight");
    var result = document.getElementById("result");

    var height = parseInt(heightvalue.value);
    var weight = parseInt(weightvalue.value);

    if(isNaN(height) || isNaN(weight)){
        result.innerHTML = "Please enter the valid height and weight";
        return;
    }

    var bmi = weight / (height / 100) ** 2;
    var catogory = "";

    if(bmi < 18.5){
        catogory = "Underweight";
    }
    else if(bmi < 25){
        catogory = "Normal weight";
    }
    else if(bmi < 30){
        catogory = "Overweight";
    }
    else{
        catogory = "Obese";
    }

    result.innerHTML = "Your BMI is"+bmi.toFixed(2)+"("+catogory+").";
}