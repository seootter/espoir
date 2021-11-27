// pc 키보드 보기
function keyboardOpen() {
    let keyboardImg = document.querySelector(".keyboard img");
    let keyboardOpenImg = document.querySelector(".keyboardOpen img");

    let keyboardImgStyle = keyboardImg.style.display;

    if(keyboardImgStyle == "none" || keyboardImgStyle == "") {
        keyboardImg.style.display = "block";
        keyboardOpenImg.style.transform = "rotate(180deg)";
    } else {
        keyboardImg.style.display = "none";
        keyboardOpenImg.style.transform = "none";
    }
}

// 정보 입력칸
function inputId() {
    let inputIdImg = document.querySelector(".inputId img");
    let inputPwImg = document.querySelector(".inputPw img");

    inputIdImg.style.display = "block";

    let loginBtn = document.querySelector(".loginButton");
    let loginBtnSpan = document.querySelector(".loginButton span");

    if(inputIdImg.style.display == "block" && inputPwImg.style.display == "block") {
        loginBtn.style.backgroundColor = "#5c95f0";
        loginBtn.style.borderColor = "#5c95f0";
        loginBtnSpan.style.color = "#fff";
        loginBtn.style.cursor = "pointer";
        loginBtn.disabled = false;
    }
}

function inputPw() {
    let inputPwImg = document.querySelector(".inputPw img");
    let inputIdImg = document.querySelector(".inputId img");

    inputPwImg.style.display = "block";

    let loginBtn = document.querySelector(".loginButton");
    let loginBtnSpan = document.querySelector(".loginButton span");

    if(inputIdImg.style.display == "block" && inputPwImg.style.display == "block") {
        loginBtn.style.backgroundColor = "#5c95f0";
        loginBtn.style.borderColor = "#5c95f0";
        loginBtnSpan.style.color = "#fff";
        loginBtn.style.cursor = "pointer";
        loginBtn.disabled = false;
    }
}

// 정보입력칸 x
function deleteBtnId() {
    let inputIdImg = document.querySelector(".inputId img");
    let inputId = document.querySelector("#id");
    let loginBtn = document.querySelector(".loginButton");
    let loginBtnSpan = document.querySelector(".loginButton span");

    inputIdImg.style.display = "none";

    inputId.value = "";

    loginBtn.style.backgroundColor = "#f0f0f0";
    loginBtn.style.borderColor = "#f0f0f0";
    loginBtnSpan.style.color = "#c6c6c6";
    loginBtn.style.cursor = "not-allowed";
}

function deleteBtnPw() {
    let inputPwImg = document.querySelector(".inputPw img");
    let inputPw = document.querySelector("#password");
    let loginBtn = document.querySelector(".loginButton");
    let loginBtnSpan = document.querySelector(".loginButton span");

    inputPwImg.style.display = "none";
    inputPw.value = "";

    loginBtn.style.backgroundColor = "#f0f0f0";
    loginBtn.style.borderColor = "#f0f0f0";
    loginBtnSpan.style.color = "#c6c6c6";
    loginBtn.style.cursor = "not-allowed";
}

// 아이디 저장 버튼
function saveClick() {
    let checkOffImg = document.querySelector("#checkOff img");
    let checkOnImg = document.querySelector("#checkOn img");

    if(checkOffImg.style.display == "inline-block" || checkOffImg.style.display == "") {
        checkOffImg.style.display = "none";
        checkOnImg.style.display = "inline-block";
    } else {
        checkOffImg.style.display = "inline-block";
        checkOnImg.style.display = "none";
    }

}

// 더보기 눌렀을 때
function moreBtn() {
    let snsMoreTag = document.querySelector("#snsMoreInfo");
    let bgTag = document.querySelector(".bg");

    snsMoreTag.style.display = "block";
    bgTag.style.display = "block";
}

function closeMore() {
    let snsMoreTag = document.querySelector("#snsMoreInfo");
    let bgTag = document.querySelector(".bg");

    snsMoreTag.style.display = "none";
    bgTag.style.display = "none";
}