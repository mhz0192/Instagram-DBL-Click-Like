var heart = document.querySelector("#container")
var icon = document.querySelector("i")

var hearts = 0

heart.addEventListener("dblclick" , function(){
    if(hearts == 0){
        icon.style.transform = "translate(-50%, -50%) scale(2)";
    icon.style.color = "red"
    icon.style.opacity = "0.8";

    setTimeout(function(){
    icon.style.opacity = "0"; 
    icon.style.color = "red" 
    },1000)
    setTimeout(function(){
    icon.style.transform = "translate(-50%, -50%) scale(1)";  
    },1000)
    }else{
        hearts = 0
    }
})