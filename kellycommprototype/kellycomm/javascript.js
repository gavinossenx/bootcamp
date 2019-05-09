window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("img").style.width = "160px";
    document.getElementById("img").style.height = "60px";
    document.getElementById("menubar").style.postion = "fixed";
    console.log("hi")
  } else{
    document.getElementById("img").style.width = ""
    document.getElementById("img").style.height= ""
  }
}