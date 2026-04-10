<script>

// 🔥 MENU ITEMS
const MENU_ITEMS = [
{name:"🏠 Home", link:"home_mode1"},  // 👈 yaha change kiya
{name:"👤 Profile", link:"profile.html"},
{name:"💳 UPI Details", link:"deposit.html"},
{name:"🏦 Bank Details", link:"withdraw.html"},
{name:"📜 History", link:"history_toggle"},

{name:"📊 Result", link:"market.html"},
{name:"💰 Winning", link:"userwining.html"},
{name:"📊 Game Rates", link:"#"},
{name:"📄 Terms", link:"terms.html"},
{name:"🚪 Logout", link:"logout"}
];

// 🔥 MENU UI
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

<div id="overlay" onclick="closeMenu()" style="
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

// 🔥 BUILD MENU
let html = "";

MENU_ITEMS.forEach(item=>{

html += `
<div style="
padding:15px;
margin-top:10px;
background:#f2f2f2;
border-radius:10px;
cursor:pointer;
font-weight:bold;
" onclick="handleMenu('${item.link}')">
${item.name}
</div>
`;

// 🔥 HISTORY DROPDOWN
if(item.link === "history_toggle"){
html += `
<div id="historyDropdown" style="display:none; padding-left:10px;">

<div style="padding:12px;margin-top:5px;background:#e6e6e6;border-radius:8px;"
onclick="window.location.href='userhistory.html?mode=1'">
1 ke 90 History
</div>

<div style="padding:12px;margin-top:5px;background:#e6e6e6;border-radius:8px;"
onclick="window.location.href='userhistory.html?mode=2'">
10 ke 950 History
</div>

<div style="padding:12px;margin-top:5px;background:#e6e6e6;border-radius:8px;"
onclick="window.location.href='typinghistory.html'">
Typing/Image
</div>

<div style="padding:12px;margin-top:5px;background:#e6e6e6;border-radius:8px;"
onclick="window.location.href='indiahistory.html'">
PlayIndia History
</div>

</div>
`;
}

});

document.getElementById("menuItems").innerHTML = html;

// 🔥 FUNCTIONS
function openMenu(){
document.getElementById("sideMenu").style.left="0";
document.getElementById("overlay").style.display="block";
}

function closeMenu(){
document.getElementById("sideMenu").style.left="-100%";
document.getElementById("overlay").style.display="none";
}

// 🔥 CLICK HANDLE
function handleMenu(link){

// ✅ HOME MODE 1
if(link === "home_mode1"){
window.location.href = "home.html?mode=1";
return;
}

// 🔥 HISTORY
if(link === "history_toggle"){
let box = document.getElementById("historyDropdown");
box.style.display = box.style.display === "block" ? "none" : "block";
return;
}

// GAME RATES
if(link === "#"){
alert("1 ke 90 | 10 ke 950");
return;
}

// LOGOUT
if(link === "logout"){
localStorage.removeItem("user");
window.location.href="index.html";
return;
}

// NORMAL
window.location.href = link;

}

</script>
