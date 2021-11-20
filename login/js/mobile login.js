// 정보 입력칸
function inputName() {
    let inputNameImg = document.querySelector(".inputName img");
    let inputTelImg = document.querySelector(".inputTel img");

    inputNameImg.style.display = "block";

    let sendBtn = document.querySelector(".send");
    let sendBtnSpan = document.querySelector(".send span");

    if(inputNameImg.style.display == "block" && inputTelImg.style.display == "block") {
        sendBtn.style.backgroundColor = "#5c95f0";
        sendBtn.style.borderColor = "#5c95f0";
        sendBtnSpan.style.color = "#fff";
        sendBtn.style.cursor = "pointer";
    }
}

function inputTel() {
    let inputNameImg = document.querySelector(".inputName img");
    let inputTelImg = document.querySelector(".inputTel img");
    let inputTel = document.querySelector("#tel");

    inputTelImg.style.display = "block";

    let sendBtn = document.querySelector(".send");
    let sendBtnSpan = document.querySelector(".send span");

    if(inputNameImg.style.display == "block" && inputTelImg.style.display == "block") {
        sendBtn.style.backgroundColor = "#5c95f0";
        sendBtn.style.borderColor = "#5c95f0";
        sendBtnSpan.style.color = "#fff";
        sendBtn.style.cursor = "pointer";
    }

    if(inputTel.value.indexOf("-") == -1) {
        return;
    } else {
        inputTel.value = inputTel.value.replace("-", "");
    }
}

function deleteBtnName() {
    let inputNameImg = document.querySelector(".inputName img");
    let inputName = document.querySelector("#name");
    let sendBtn = document.querySelector(".send");
    let sendBtnSpan = document.querySelector(".send span");

    inputNameImg.style.display = "none";

    inputName.value = "";

    sendBtn.style.backgroundColor = "#f0f0f0";
    sendBtn.style.borderColor = "#f0f0f0";
    sendBtnSpan.style.color = "#c6c6c6";
    sendBtn.style.cursor = "not-allowed";
}

function deleteBtnTel() {
    let inputTelImg = document.querySelector(".inputTel img");
    let inputTel = document.querySelector("#tel");
    let sendBtn = document.querySelector(".send");
    let sendBtnSpan = document.querySelector(".send span");

    inputTelImg.style.display = "none";
    inputTel.value = "";

    sendBtn.style.backgroundColor = "#f0f0f0";
    sendBtn.style.borderColor = "#f0f0f0";
    sendBtnSpan.style.color = "#c6c6c6";
    sendBtn.style.cursor = "not-allowed";
}