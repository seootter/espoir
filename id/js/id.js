
// 정보 입력칸
function inputName() {
    let inputNameImg = document.querySelector(".inputName img");
    let inputTelImg = document.querySelector(".inputTel img");
    let inputName = document.querySelector("#name");

    inputNameImg.style.display = "block";
    inputName.style.borderColor = "#14b76c";

    let sendBtn = document.querySelector(".send");
    let sendBtnSpan = document.querySelector(".send span");

    if(inputNameImg.style.display == "block" && inputTelImg.style.display == "block") {
        sendBtn.style.backgroundColor = "#5c95f0";
        sendBtn.style.borderColor = "#5c95f0";
        sendBtnSpan.style.color = "#fff";
        sendBtn.style.cursor = "pointer";
        sendBtn.disabled = false;
    }
}

function inputTel() {
    let inputNameImg = document.querySelector(".inputName img");
    let inputTelImg = document.querySelector(".inputTel img");
    let inputTel = document.querySelector("#tel");
    let inputTelValue = inputTel.value;

    inputTelImg.style.display = "block";

    let sendBtn = document.querySelector(".send");
    let sendBtnSpan = document.querySelector(".send span");

    if(inputNameImg.style.display == "block" && inputTelImg.style.display == "block" && inputTelValue[0] == 0 && inputTelValue[1] == 1 && inputTelValue[2] == 0) {
        sendBtn.style.backgroundColor = "#5c95f0";
        sendBtn.style.borderColor = "#5c95f0";
        sendBtnSpan.style.color = "#fff";
        sendBtn.style.cursor = "pointer";
        sendBtn.disabled = false;
    }

    if(event.keyCode < 48 || event.keyCode > 57){
        event.returnValue=false;
        inputTel.style.borderColor = "#f23636";
     }

}

// 정보입력칸 x
function deleteBtnName() {
    let inputNameImg = document.querySelector(".inputName img");
    let inputName = document.querySelector("#name");
    let sendBtn = document.querySelector(".send");
    let sendBtnSpan = document.querySelector(".send span");

    inputNameImg.style.display = "none";
    inputName.style.borderColor = "#5c95f0";

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
    inputTel.style.borderColor = "#5c95f0";

    inputTel.value = "";

    sendBtn.style.backgroundColor = "#f0f0f0";
    sendBtn.style.borderColor = "#f0f0f0";
    sendBtnSpan.style.color = "#c6c6c6";
    sendBtn.style.cursor = "not-allowed";
}
