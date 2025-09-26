function saveUsername() {
    let username = document.getElementById("usernameInput").value
    localStorage.setItem("username", username);
    alert("username tersimpan")
}
function showUsername() {
    let username = localStorage.getItem("username");
    document.getElementById("displayer").innerText = username ? username : "belum ada data";
}

function login(a) {
    a.preventdefault();
    let user =document.getElementById("loginUser").value;
    let pass =document.getElementById("loginPass").value;
    localStorage.setItem("username", user);
    localStorage.setItem("username", pass);
    alert("login berhasil")
}
function logout() {
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    alert("logout berhasil")
}
let count = parseInt(localStorage.getItem("counter")) || 0;
document.getElementById("counter").innerText = count;
function increment() {
  count++;
  localStorage.setItem("counter", count);
  document.getElementById("counter").innerText = count;
}

/* --- 11 & 12 Tema --- */
function setTheme() {
  let theme = document.getElementById("themeSelect").value;
  localStorage.setItem("theme", theme);
  applyTheme();
}
function applyTheme() {
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.style.background = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
  if (theme) document.getElementById("themeSelect").value = theme;
}

let shoppingList = JSON.parse(localStorage.getItem("list")) || [];
function addItem() {
  let item = document.getElementById("itemInput").value;
  if(item){
    shoppingList.push(item);
    localStorage.setItem("list", JSON.stringify(shoppingList));
    document.getElementById("itemInput").value = "";
    showList();
  }
}
function showList() {
  document.getElementById("list").innerHTML = shoppingList.map(i => "<li>"+i+"</li>").join("");
}
function clearAll() {
  localStorage.clear();
  shoppingList = [];
  showList();
  document.getElementById("counter").innerText = 0;
  alert("Semua data dihapus!");
}

function saveBiodata(e) {
  e.preventDefault();
  localStorage.setItem("nama", document.getElementById("bioName").value);
  localStorage.setItem("umur", document.getElementById("bioAge").value);
  localStorage.setItem("email", document.getElementById("bioEmail").value);
  alert("Biodata tersimpan!");
  showBiodata();
}
function showBiodata() {
  let nama = localStorage.getItem("nama");
  let umur = localStorage.getItem("umur");
  let email = localStorage.getItem("email");
  if(nama && umur && email){
    document.getElementById("bioDisplay").innerText = 
      `Nama: ${nama}, Umur: ${umur}, Email: ${email}`;
  }
}

function checkUser(e) {
  e.preventDefault();
  if(localStorage.getItem("username")) {
    alert("Username sudah ada!");
  } else {
    localStorage.setItem("username", document.getElementById("newUser").value);
    alert("Username baru tersimpan!");
  }
}
function changeUsername() {
  let newUser = document.getElementById("changeUser").value;
  if(newUser){
    localStorage.setItem("username", newUser);
    alert("Username diganti!");
  }
}

function rememberLogin(e) {
  e.preventDefault();
  let user = document.getElementById("remUser").value;
  let pass = document.getElementById("remPass").value;
  let remember = document.getElementById("remember").checked;
  if (remember) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    alert("Login disimpan dengan Remember Me!");
  } else {
    alert("Login tanpa Remember Me");
  }
}

window.onload = function() {
  applyTheme();
  showList();
  showBiodata();
}
