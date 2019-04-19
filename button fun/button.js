
var btn1 = document.getElementById("btn-1");
console.log(btn1);
var buttonclick = function(){
    btn1.textContent = "yo";
    console.log("hi");
};
console.log(this)