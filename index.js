let qrbox = document.getElementById("qrbox");
let qrimg = document.getElementById("qrimg");
let txturl = document.getElementById("txturl");


function genQR(){
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + txturl.value;
}

