var counter = 1
setInterval(function() {
    document.getElementById("r"+counter).checked = true;
    counter++;
    if(counter > 3){
        counter =1;
    }
}, 4000);

function showSlideBar(){
    var slidebarBtn = document.querySelector(".navbar-options");
    var slidebarCloseBtn = document.querySelector(".slidebar__close");
    var slidebar = document.querySelector(".slidebar");
    console.log(slidebarCloseBtn);

    if(slidebarBtn){
        slidebarBtn.onclick = function(){
            slidebar.style.transform = "translateX(0)"
        }
    }
    if(slidebarCloseBtn){
        slidebarCloseBtn.onclick = function(){
            slidebar.style.transform = "translateX(100%)";
        }
    }
}

showSlideBar();