let options = document.getElementById("options");
let next = document.getElementById("next");
let pop_input = document.querySelector(".pop-input");
let check = document.getElementById("check");
let str = document.getElementById("input").value;
let valid = document.querySelector(".valid");
let un_valid = document.querySelector(".unvalid");



let re_email = /^(?!.*\.\.)[a-zA-Z0-9.%_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let re_phone = /^(\+?88)?01[3456789][0-9]{8}$/;
let re_post = /^[0-9]{4}$/;


options.addEventListener("change", close_pop_input);
next.addEventListener("click", shop_input_field);
check.addEventListener("click", validation);



function close_pop_input() {

    document.getElementById("input").value = "";

    valid.classList.remove("active");
    valid.classList.add("hidden");

    un_valid.classList.remove("active");
    un_valid.classList.add("hidden");

    if (options.value == "select") {
        pop_input.classList.remove("active");
        pop_input.classList.add("hidden");


        next.classList.remove("hidden");
        next.classList.add("active");


    }
}

function shop_input_field(e) {
    e.preventDefault();
    if (options.value !== "select") {
        pop_input.classList.remove("hidden");
        pop_input.classList.add("active");

        next.classList.remove("active");
        next.classList.add("hidden");


    }
    else {
        alert("You don't Select Any Option");
    }

}

function validation() {
    str = document.getElementById("input").value;
    if (!str) {
        alert("You don't provide Your Info");
    } else {
        if (options.value == "email") {
            if (re_email.test(str)) {
                func_valid();
            } else {
                func_unvalid();
            }
        } else if (options.value == "phone-number") {
            if (re_phone.test(str)) {
                func_valid();
            } else {
                func_unvalid();
            }
        } else if (options.value == "post-code") {
            if (re_post.test(str)) {
                func_valid();
            } else {
                func_unvalid();
            }
        }

    }

}

function func_valid() {
    valid.classList.remove("hidden");
    valid.classList.add("active");

    un_valid.classList.remove("active");
    un_valid.classList.add("hidden");
}


function func_unvalid() {
    un_valid.classList.remove("hidden");
    un_valid.classList.add("active");

    valid.classList.remove("active");
    valid.classList.add("hidden");

}
