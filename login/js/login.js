function inputIdPw() {
    let inputIdImg = document.querySelector(".inputId img");
    let inputPwImg = document.querySelector(".inputPw img");

    inputIdImg.style.display = "block";
    inputPwImg.style.display = "block";
}

function check() {
    let checkOffTag = document.querySelector("#checkOff");
    let checkOnTag = document.querySelector("#checkOn");

    checkOffTag.style.display = "none";
    checkOnTag.style.display = "block";
}