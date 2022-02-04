let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}


document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

$(".btn-filter").click(function(){
    var attr = $(this).attr("data-li");

    $(".btn-filter").removeClass("active");
    $(this).addClass("active");

    $(".item").hide();

    if(attr == "nineties"){
        $("." + attr).show();
    }
    else if(attr == "twenties"){
        $("." + attr).show();
    }
    else if(attr == "twenty-tens"){
        $("." + attr).show();
    }
    else if(attr == "twenty-twenties"){
        $("." + attr).show();
    }
    else{
        $(".item").show();
    }
});

let inputBox =  searchForm.querySelector("input");
let icon = searchForm.querySelector(".icon");
let linkTag = searchForm.querySelector("a");
let webLink;

inputBox.onkeyup = (e) =>{
    debugger;
    let userData = e.target.value;
    if(userData){
        icon.onclick = () =>{
            webLink =  "https://www.google.com/search?q=" + userData;
            linkTag.setAttribute("href", webLink);
            console.log(webLink);
            linkTag.click();    
        }
    };
};

$(".arrow-right").bind("click", function (event) {
    event.preventDefault();
    $(".vid-list-container").stop().animate({
        scrollLeft: "+=336"
    }, 750);
});

$(".arrow-left").bind("click", function (event) {
    event.preventDefault();
    $(".vid-list-container").stop().animate({
        scrollLeft: "-=336"
    }, 750);
});

