let $qrCode = document.querySelector("img");
let $qrText = document.querySelector("textarea");
let $qrBtn = document.querySelector("button");

$qrBtn.addEventListener("click", generateQR);

function generateQR(){
    let size = "1000x1000";
    let data = $qrText.value;
    let urlBase = "http://api.qrserver.com/v1/create-qr-code/";

    let url = `${urlBase}?data=${data}&size=${size}`;

    $qrCode.src = url;
}