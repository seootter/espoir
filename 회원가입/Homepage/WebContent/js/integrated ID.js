// 정보 입력칸 keydown
function inputId() {
    let inputIdImg = document.querySelector("#deleteId img");
    let inputId = document.querySelector("#id");
    let greenTxtId = document.querySelector("#greenTxtId");
    let redTxtId = document.querySelector("#redTxtId");

    inputIdImg.style.display = "block";

    let idValue = inputId.value;

    if(idValue.length < 4) {
        inputId.style.borderColor = "#f23636";
        redTxtId.style.display = "block";
        greenTxtId.style.display = "none";
    } else if(idValue.length >= 4) {
        inputId.style.borderColor = "#14b76c";
        redTxtId.style.display ="none";
        greenTxtId.style.display = "block";
    } else {
        redTxtId.style.display ="none";
        greenTxtId.style.display = "none";
    }
}

function inputPw() {
    let inputPwImg = document.querySelector("#deletePw img");
    let inputPw = document.querySelector("#password");
    let greenTxtPw = document.querySelector("#greenTxtPw");
    let redTxtPw = document.querySelector("#redTxtPw");
    let yellowPw = document.querySelector("#yellowPw");
    inputPwImg.style.display = "block";

    let pwValue = inputPw.value;

    if(pwValue.length < 10){
        inputPw.style.borderColor = "#f23636";
        yellowPw.style.display = "none";
        greenTxtPw.style.display = "none";
        redTxtPw.style.display = "block";
        inputPwImg.style.bottom = "4.37em";
    } else if(pwValue.length == 10){
        inputPw.style.borderColor = "#14b76c";
        redTxtPw.style.display ="none";
        greenTxtPw.style.display = "none";
        yellowPw.style.display = "block";
        inputPwImg.style.bottom = "3em";
    } else if(pwValue.length > 10) {
        inputPw.style.borderColor = "#14b76c";
        redTxtPw.style.display ="none";
        yellowPw.style.display = "none";
        greenTxtPw.style.display = "block";
        inputPwImg.style.bottom = "3em";
    } else {
        redTxtPw.style.display ="none";
        yellowPw.style.display = "none";
        greenTxtPw.style.display = "none";
        inputPwImg.style.bottom = "4.37em";
    }
}

function inputPwRe() {
    let inputPwReImg = document.querySelector("#deletePwRe img");
    let inputPwRe = document.querySelector("#passwordRe");
    let greenTxtPwRe = document.querySelector("#greenTxtPwRe");
    let redTxtPwRe = document.querySelector("#redTxtPwRe");
    let yellowPwRe = document.querySelector("#yellowPwRe");
    let inputPw = document.querySelector("#password");

    inputPwReImg.style.display = "block";

    let pwReValue = inputPwRe.value;
    let pwValue = inputPw.value;

    if(pwReValue.length < 10){
        inputPwRe.style.borderColor = "#f23636";
        yellowPwRe.style.display = "none";
        greenTxtPwRe.style.display = "none";
        redTxtPwRe.style.display = "block";
    } else if(pwReValue.length == 10){
        inputPwRe.style.borderColor = "#14b76c";
        redTxtPwRe.style.display ="none";
        greenTxtPwRe.style.display = "none"
        yellowPwRe.style.display = "block";
    } else if(pwReValue.length > 10) {
        inputPwRe.style.borderColor = "#14b76c";
        redTxtPwRe.style.display ="none";
        yellowPwRe.style.display = "none";
        greenTxtPwRe.style.display = "block";
    } else {
        redTxtPwRe.style.display ="none";
        yellowPwRe.style.display = "none";
        greenTxtPwRe.style.display = "none";
    }
}

// 정보 입력칸 focus
function focusId() {
    let inputId = document.querySelector("#id")
    let greenTxtId = document.querySelector("#greenTxtId");
    let redTxtId = document.querySelector("#redTxtId");

    inputId.style.borderColor = "#f23636";
    redTxtId.style.display = "block";
    greenTxtId.style.display = "none";
}

function focusPw() {
    let inputPw = document.querySelector("#password");
    let greenTxtPw = document.querySelector("#greenTxtPw");
    let redTxtPw = document.querySelector("#redTxtPw");
    let yellowPw = document.querySelector("#yellowPw");

    inputPw.style.borderColor = "#f23636";
    redTxtPw.style.display = "block";
    greenTxtPw.style.display = "none";
    yellowPw.style.display = "none";
}

function focusPwRe() {
    let inputPwRe = document.querySelector("#passwordRe");
    let greenTxtPwRe = document.querySelector("#greenTxtPwRe");
    let redTxtPwRe = document.querySelector("#redTxtPwRe");
    let yellowPwRe = document.querySelector("#yellowPwRe");

    inputPwRe.style.borderColor = "#f23636";
    redTxtPwRe.style.display = "block";
    greenTxtPwRe.style.display = "none";
    yellowPwRe.style.display = "none";
}

// 정보 입력칸 x click
function deleteBtnId() {
    let inputIdImg = document.querySelector("#deleteId img");
    let inputId = document.querySelector("#id");
    let redTxtId = document.querySelector("#redTxtId");

    inputIdImg.style.display = "none";
    inputId.value = "";
    inputId.style.borderColor = "#f23636";
    greenTxtId.style.display = "none";
    redTxtId.style.display = "block";
}

function deleteBtnPw() {
    let inputPwImg = document.querySelector("#deletePw img");
    let inputPw = document.querySelector("#password");
    let greenTxtPw = document.querySelector("#greenTxtPw");
    let redTxtPw = document.querySelector("#redTxtPw");
    let yellowPw = document.querySelector("#yellowPw");

    inputPwImg.style.display = "none";
    inputPw.value = "";
    inputPw.style.borderColor = "#f23636";    
    greenTxtPw.style.display = "none";
    yellowPw.style.display = "none";
    redTxtPw.style.display = "block";
}

function deleteBtnPwRe() {
    let inputPwReImg = document.querySelector("#deletePwRe img");
    let inputPwRe = document.querySelector("#passwordRe");
    let greenTxtPwRe = document.querySelector("#greenTxtPwRe");
    let redTxtPwRe = document.querySelector("#redTxtPwRe");
    let yellowPwRe = document.querySelector("#yellowPwRe");

    inputPwReImg.style.display = "none";
    inputPwRe.value = "";
    inputPwRe.style.borderColor = "#f23636";    
    greenTxtPwRe.style.display = "none";
    yellowPwRe.style.display = "none";
    redTxtPwRe.style.display = "block";
}

// 비밀번호 입력 시 유의사항 더보기
function pwPoint() {
    let pwPreBox = document.querySelector(".pwPrecautions");

    pwPreBox.style.display = "block";
}

function pwPreCloseBtn() {
    let pwPreBox = document.querySelector(".pwPrecautions");

    pwPreBox.style.display = "none";
}

// 약관 전체동의 버튼
function checkOffBtn() {
    let checkOffBtn = document.querySelector("#checkOffBig img");
    let checkOnBtn = document.querySelector("#checkOnBig img");
    let chOff = document.querySelectorAll(".chOff");

    if(checkOffBtn.style.display == "inline-block" || checkOffBtn.style.display == "") {
        checkOffBtn.style.display = "none";
        checkOnBtn.style.display = "inline-block";
    } else if(checkOnBtn.style.display == "inline-block") {
        checkOnBtn.style.display = "none";
        checkOffBtn.style.display = "inline-block";
    }
}


// 약관 동의 접기
function boxFlodBtn() {
    let boxFlod = document.querySelector(".boxFold");
    let boxOpen = document.querySelector(".boxOpen");
    let clauseInfo = document.querySelector(".clauseInfo");
    let agreeList1 = document.querySelector("#agreeBeauty");
    let agreeList2 = document.querySelector("#agreeMember");
    let agreeList3 = document.querySelector(".sns");
    let perPoint = document.querySelector("#perpoint");

    if(boxOpen.style.display == "none" || boxOpen.style.display == "") {
        boxFlod.style.display = "none";
        boxOpen.style.display = "block";
        clauseInfo.style.height = "59px";
        agreeList1.style.display = "none";
        agreeList2.style.display = "none";
        agreeList3.style.display = "none";
        perPoint.style.display = "none";
    } else if(boxOpen.style.display == "block") {
        boxFlod.style.display = "block";
        boxOpen.style.display = "none";
        clauseInfo.style.height = "auto";
        agreeList1.style.display = "block";
        agreeList2.style.display = "block";
        agreeList3.style.display = "block";
        perPoint.style.display = "block";
    } else {
        return;
    }
}


// 뷰티포인트 통합회원 약관 더보기
function beautyMoreBtn() {
    let beMoreBtn = document.querySelector("#perInfo");
    let bg = document.querySelector(".bg");

    beMoreBtn.style.display = "block";
    bg.style.display = "block";
}

function beautyCloseBtn() {
    let beMoreBtn = document.querySelector("#perInfo");
    let bg = document.querySelector(".bg");

    beMoreBtn.style.display = "none";
    bg.style.display = "none";
}

// 에스쁘아 서비스 이용약관 더보기
function serviceMoreBtn() {
    let serMoreBtn = document.querySelector("#serviceInfo");
    let bg = document.querySelector(".bg");

    serMoreBtn.style.display = "block";
    bg.style.display = "block";
}

function serviceCloseBtn() {
    let serMoreBtn = document.querySelector("#serviceInfo");
    let bg = document.querySelector(".bg");

    serMoreBtn.style.display = "none";
    bg.style.display = "none";
}

// 개인정보 수집 및 이용 동의 더보기
function collectionMoreBtn() {
    let collMoreBtn = document.querySelector("#collectionInfo");
    let bg = document.querySelector(".bg");

    collMoreBtn.style.display = "block";
    bg.style.display = "block";
}

function collectionCloseBtn() {
    let collMoreBtn = document.querySelector("#collectionInfo");
    let bg = document.querySelector(".bg");

    collMoreBtn.style.display = "none";
    bg.style.display = "none";
}

// 개인정보 수집 및 이용 동의(마케팅) 더보기
function marketingMoreBtn() {
    let marMoreBtn = document.querySelector("#marketingInfo");
    let bg = document.querySelector(".bg");

    marMoreBtn.style.display = "block";
    bg.style.display = "block";
}

function marketingCloseBtn() {
    let marMoreBtn = document.querySelector("#marketingInfo");
    let bg = document.querySelector(".bg");

    marMoreBtn.style.display = "none";
    bg.style.display = "none";
}

// 개인정보 처리 위탁에 대한 안내 더보기
function precautionsPoint() {
    let preBox = document.querySelector(".perInfoPrecautions");

    preBox.style.display = "block";
}

function preCloseBtn() {
    let preBox = document.querySelector(".perInfoPrecautions");

    preBox.style.display = "none";
}

// 가입 버튼

