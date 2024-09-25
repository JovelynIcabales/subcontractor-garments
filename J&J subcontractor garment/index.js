
const arrowbtns = document.querySelectorAll(".arr-prev, .arr-next");
const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-img img");
const carouselWidth = carouselItems[0].offsetWidth;
const optionMenu =  document.querySelector(".select-menu"),
        selectBtn =  optionMenu.querySelector(".select-btn"),
        options = optionMenu.querySelectorAll(".option"),
        sBtn_text = document.querySelector(".sBtn-text");

// header and footer
$(document).ready(function() {
    $.get("partials/header.html", function(data) {
        $("#header").html(data);
    });

    $.get("partials/footer.html", function(data) {
        $("#footer").html(data);
    });

    $.get("form.html", function(data) {
        $("#form").html(data);
    });
});

// navbar
function showSidebar(){
    const sidebar = document.querySelector('.sidebar-container');
        sidebar.style.display='block';
        document.getElementById("logo").style.display="none";
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar-container');
        sidebar.style.display='none';
        document.getElementById("logo").style.display="block";
}

// carousel arrow buttons
carousel.scrollLeft = carouselWidth; //default the carousel to start at the 2nd img
arrowbtns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        if (btn.classList.contains('arr-next')){
            carousel.scrollLeft += carouselWidth; //move the items to the right
        }else if (btn.classList.contains('arr-prev')){
            carousel.scrollLeft -= carouselWidth; //move the items to the left
            console.log(carouselWidth);
        }
    })
});

// form selection dropdown
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
options.forEach(option =>{
    option.addEventListener("click", () => {
        let selectedOption = option.innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    })
})



