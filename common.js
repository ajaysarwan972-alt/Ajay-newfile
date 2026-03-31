const WHATSAPP_NUMBER = "918278082192"; // apna number

document.addEventListener("DOMContentLoaded", function(){

let btn = document.createElement("a");
btn.href = "https://wa.me/" + WHATSAPP_NUMBER;
btn.target = "_blank";
btn.innerHTML = "💬";

btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.background = "#25D366";
btn.style.color = "#fff";
btn.style.fontSize = "28px";
btn.style.padding = "15px";
btn.style.borderRadius = "50%";
btn.style.textDecoration = "none";
btn.style.zIndex = "999";
btn.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";

document.body.appendChild(btn);

});
