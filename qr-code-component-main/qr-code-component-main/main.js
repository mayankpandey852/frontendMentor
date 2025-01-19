//getting the html elem
let formElem=document.getElementById("qrGenForm")
let qrImgElem=document.getElementById("qr-img");
let inputValElem=document.getElementById("data")

formElem.addEventListener('submit',(e)=>{
    e.preventDefault();
    //gen image
    var qrcode = new QRCode(qrImgElem,
        inputValElem.value);
    //reset form 
    formElem.reset()
    
})

