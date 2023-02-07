


let navbar = document.querySelector(".navbar");
let scrollUpBtn = document.querySelector(".scroll-up-btn");
let load = document.getElementById("loading");
let name = document.getElementById("user_name");
let email = document.getElementById("user_email");
let msg = document.getElementById("message");
let ul = document.querySelector('.navbar .menu_items');
let li = document.querySelectorAll('.navbar .menu_items li');
let read = document.querySelector('.skills .skills_content .left a');
// for active navbar link

// $(document).on('click', '.navbar .menu_items li', function(){
//     $(this).addClass('active').siblings().removeClass('active');
// });


// for active navbar link
li.forEach(element => {
    element.addEventListener("click", function(){
        // ul.querySelector('.active').classList.remove('active');
        // element.classList.add('active');
        document.querySelector('.navbar .menu_items').classList.toggle("active");
        document.querySelector('.menu-btn i').classList.toggle("active");

    });
});



// let load = document.getElementById("load");
// let loadContent = document.querySelector(".load_content");
// let loadContentP =document.querySelector(".load_content p");
// let circle = document.querySelector(".circle");

// setTimeout(function loading() {
//     load.style.display = "none";
//     loadContent.style.display = "none";
//     loadContentP.style.display = "none";
//     circle.style.display = "none";
// } , 3000);  
// document.addEventListener("load", function(){
//     load.style.display = 'none';
// })
// active.addEventListener("click",  function(){
//     active.classList.add("active");
// })

$('.menu-btn').click(function () {
    $('.navbar .menu_items').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});


// setTimeout(function loading() {
//     document.body.style.overflowY = 'scroll';
//     load.style.display = 'none';
    

// }, 1500);
function loading(){
    document.body.style.overflowY = 'scroll';
    load.style.display = 'none';
}

window.addEventListener("DOMContentLoaded", loading);

document.addEventListener("scroll", function(){
    if(window.pageYOffset > 20){
         navbar.classList.add("sticky");
     }else{
         navbar.classList.remove("sticky");
     }
    if(window.pageYOffset > 1500){
       scrollUpBtn.classList.add("show");
    }else{
         scrollUpBtn.classList.remove("show")
     }
});
read.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector('.skills .skills_content .left p#read_more').classList.toggle('active');
    if (document.querySelector('.skills .skills_content .left p#read_more.active')){
        read.textContent = "Read Less";
    }else{
        read.textContent = "Read More";
    }
});

scrollUpBtn.addEventListener('click', function(){
    window.scrollTo(0, 0)
});

var typed = new Typed(".typing", {
    strings: ["Web Developer", "Programmer", "Freelancer", "Photographer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

typed = new Typed(".typing-2", {
    strings: ["Web Developer", "Programmer", "Freelancer", "Photographer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

function sendMail() {
    var tempParams = {
        to_name:"Shubham",
        user_name: name.value,
        user_email: email.value,
        message: msg.value
    }
    emailjs.send("service_zy5jf76", "template_4picust", tempParams,"user_Rug0qw1kZgxDpeEWKzU1V");
}
// document.getElementById("contact-button").addEventListener("click", (e) =>{
//     e.preventDefault();
//     sendMail();
    
//     document.getElementById("contact-form").reset();
// });




function validate(){
    document.getElementById("contact-button").addEventListener("click", (e) => {
        e.preventDefault();

        if (name.value === "" || email.value === "" || msg.value === ""){
            inputEmpty();
        }
        else{
            if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))){
                error();
            }else{
            sendMail();
            success();
            document.getElementById("contact-form").reset();
            }
        }
        
    });

}
validate();

function success() {
    swal({
        title: "Yay!",
        text: "Your message has been sent successfully!",
        icon: "success",
        button: "Ok",
    });
}

function error() {
    swal({
        title: "Oops!",
        text: "Invalid Email Address",
        icon: "error",
        button: "Ok",
    });
}

function inputEmpty() {
    swal({
        title: "Oops!",
        text: "Input fields are required",
        icon: "error",
        button: "Ok",
    });
}

