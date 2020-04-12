
//Function to calculate zodiac sign
function calZodiac(){
  var bmonth = document.getElementById("month").value;
  var bday = document.getElementById("day").value;
  var result = "Invalid date.";


    if (bmonth == 1&& bday >= 20 || bmonth == 2 && bday <= 18){
        result = ("Aquarius");
    
    }

    if (bmonth == 2&& bday >= 19 || bmonth == 3&& bday <= 20){
       result = ("Pisces");
      
    }
   if (bmonth == 3&& bday >= 21 || bmonth == 4 && bday <= 19){
       result = ("Aries");
   }
  
    if (bmonth == 4&& bday >= 20|| bmonth == 5 && bday <= 20){
        result = ("Taurus");
      
    }
  
    if (bmonth == 5&& bday >= 21 || bmonth == 6 && bday <= 20){
        result = ("Gemini");
     
    }
  
    if (bmonth == 6&& bday >= 21 || bmonth == 7&& bday <= 22){
        result = ("Cancer");
      
    }
    if (bmonth == 7&& bday >= 23 || bmonth == 8 && bday <= 22){
        result = ("Leo");
      
    }
    if (bmonth == 8 && bday >= 23 || bmonth == 9 && bday <= 22){
        result = ("Virgo");
    }
    if (bmonth == 9&& bday >= 23 || bmonth == 10&& bday <= 22){
      result = ("Libra");
    }
    if (bmonth == 10 && bday >= 23|| bmonth == 11 && bday <= 21){
       result = ("Scorpio");
    }
    if (bmonth == 11 && bday >= 22 || bmonth == 12 && bday <= 21){
        result = ("Sagittarius");
    }
  
  if(bmonth == 12 && bday >= 22 || bmonth == 1 && bday <= 19){
 
        result = ("Capricorn");

    }
  else if (bmonth>12||bday>31){
       alert("Please enter an accurate date ! ");
    }
 document.getElementById("output").innerHTML= result;
}
  

//function to calculate body mass index
function countBmi(){

var age = document.getElementById("age");
var height = document.getElementById("height");
//var feet = document.getElementById("feet");
//var inch = document.getElementById("inches");
//var height = (feet*30.48)+(inch*2.54);
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }
  form.reset();
  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = 'Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Healthy';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese';
     }else if(35<=bmi){
    result = 'Extremely obese';
     }

     document.getElementById("output2").innerHTML= result;
     document.getElementById("output1").innerHTML= bmi;
  
  
}
/*
function countBmi(){
var age = document.getElementById("age");
var male = document.getElementById("m");
var female = document.getElementById("f");
var weight = document.getElementById("weight");
var result = 2.54 * (document.getElementById("feet").value * 12 + document.getElementById("inches").value);
var height = result;
if(weight > 0 && height > 0){   
var finalBmi = weight/(height/100*height/100);
alert(finalBmi);
//document.bmiForm.bmi.value = finalBmi
if(finalBmi < 18.5){
result = "Hmm... you are too thin."
}
if(finalBmi > 18.5 && finalBmi < 25){
result = "Yah! you are healthy."
}
if(finalBmi > 25){
result = "Oops... you are overweight."
}
}
else{
//alert("Please Fill in everything correctly")
}
document.getElementById("output2").innerHTML= result;
document.getElementById("output1").innerHTML= finalBmi;
}*/