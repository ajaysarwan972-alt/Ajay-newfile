// 🔥 LOAD KE BAAD RUN
window.onload = function(){

const MENU_ITEMS = [
{name:"🏠 Home", link:"home"},
{name:"👤 Profile", link:"profile.html"},
{name:"💳 UPI Details", link:"deposit.html"},
{name:"🏦 Bank Details", link:"withdraw.html"},
{name:"📜 History", link:"history"},
{name:"📊 Result", link:"market.html"},
{name:"💰 Winning", link:"userwining.html"},
{name:"📊 Game Rates", link:"#"},
{name:"📄 Terms", link:"terms.html"},
{name:"🚪 Logout", link:"logout"}
];

// 🔥 UI CREATE
document.body.insertAdjacentHTML("beforeend", `
<div id="sideMenu" style="
position:fixed;
top:0;
left:-100%;
width:80%;
height:100%;
background:#fff;
z-index:9999;
padding:15px;
transition:0.3s;
overflow:auto;
">
<h2>Menu</h2>
<div id="menuItems"></div>
</div>

<div id="overlay" style="
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.5);
display:none;
z-index:9998;
"></div>
`);

// 🔥 MENU BUILD
let html = "";

MENU_ITEMS.forEach(item => {

html += `
<div class="menuBtn" data-link="${item.link}" style="
padding:15px;
margin-top:10px;
background:#f2f2f2;
border-radius:10px;
cursor:pointer;
font-weight:bold;
">
${item.name}
</div>
`;

// 🔥 HISTORY DROPDOWN
if(item.link === "history"){
html += `
<div id="historyBox" style="display:none; padding-left:10px;">

<div class="menuBtn" data-link="mode1" style="padding:10px;margin-top:5px;background:#ddd;border-radius:8px;">
1 ke 90 History
</div>

<div class="menuBtn" data-link="mode2" style="padding:10px;margin-top:5px;background:#ddd;border-radius:8px;">
10 ke 950 History
</div>

<div class="menuBtn" data-link="typinghistory.html" style="padding:10px;margin-top:5px;background:#ddd;border-radius:8px;">
Typing/Image
</div>

<div class="menuBtn" data-link="indiahistory.html" style="padding:10px;margin-top:5px;background:#ddd;border-radius:8px;">
PlayIndia History
</div>

</div>
`;
}

});

document.getElementById("menuItems").innerHTML = html;

// 🔥 CLICK SYSTEM (MAIN FIX)
document.querySelectorAll(".menuBtn").forEach(btn=>{
btn.onclick = function(){

let link = this.getAttribute("data-link");

// ✅ HOME MODE 1
if(link === "home"){
window.location.href = "home.html?mode=1";
return;
}

// 🔥 HISTORY OPEN
if(link === "history"){
let box = document.getElementById("historyBox");
box.style.display = box.style.display === "block" ? "none" : "block";
return;
}

// 🔥 MODE 1
if(link === "mode1"){
window.location.href = "userhistory.html?mode=1";
return;
}

// 🔥 MODE 2
if(link === "mode2"){
window.location.href = "userhistory.html?mode=2";
return;
}

// 🔥 GAME RATE
if(link === "#"){
alert("1 ke 90 | 10 ke 950");
return;
}

// 🔥 LOGOUT
if(link === "logout"){
localStorage.removeItem("user");
window.location.href = "index.html";
return;
}

// 🔥 NORMAL LINK
window.location.href = link;

};
});

// 🔥 OPEN MENU
window.openMenu = function(){
document.getElementById("sideMenu").style.left = "0";
document.getElementById("overlay").style.display = "block";
}

// 🔥 CLOSE MENU
window.closeMenu = function(){
document.getElementById("sideMenu").style.left = "-100%";
document.getElementById("overlay").style.display = "none";
}

document.getElementById("overlay").onclick = closeMenu;

};
