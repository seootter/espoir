
// 정보 입력칸
function inputId() {
    let inputIdImg = document.querySelector(".inputId img");
    let inputId = document.querySelector("#id");
    let aText = document.querySelector(".text");
    let aHref = document.querySelector(".aHref");
    let aHrefImg = document.querySelector(".aHref img");

    inputIdImg.style.display = "block";

    let idValue = inputId.value;

    if(idValue.length < 4) {
        inputId.style.borderColor = "#f23636";
    } else if(idValue.length >= 4) {
        inputId.style.borderColor = "#14b76c";

        aHref.style.borderColor = "#d3d3d3";
        aHref.style.backgroundColor = "none";
        aHref.style.cursor = "pointer";
        aText.style.color = "block";
        aHrefImg.style.opacity = "0";
    }
}

// 정보입력칸 x
function deleteBtnId() {
    let inputIdImg = document.querySelector(".inputId img");
    let inputId = document.querySelector("#id");

    inputIdImg.style.display = "none";
    inputId.style.borderColor = "#5c95f0";

    inputId.value = "";
}

