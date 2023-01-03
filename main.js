const loginNav = document.getElementById("login-btn");
const loginInside = document.getElementById("form");
const logBtn = document.getElementById("sub-btn");
const signUp = document.getElementById("signup-btn");
const close = document.getElementById("close");
const darken = document.getElementById("darken");
const menuList = document.getElementById("menu-list");
const menuBtn = document.getElementById("menu-btn");

const login = document.getElementById("login");
const uname = document.getElementById("uname");
const psw = document.getElementById("psw");
const subBtn = document.getElementById("log-btn");



// login 
close.addEventListener('click', function() {
  loginInside.classList.remove('show-login');
  menuList.classList.remove('show-menu');
  loginInside.style.transition = "all ease-out 0.5s";
  hideDark();
});

loginNav.addEventListener('click', function() {
  loginInside.classList.toggle('show-login');
  loginInside.style.transition = "all ease-out 0.5s";
  openDark();
});
function openDark(){
  darken.style.visibility = " visible ";
  darken.style.display = "block";
};

function hideDark(){
  darken.style.visibility = "hidden";
  addContents.style.visibility = "hidden";
};

// subBtn.addEventListener('click', (e) => {
//   var email = [];
//   var password = [];
//   accounts.forEach(credential => {
//     if()
//   });
// })





// login end

// menu
menuBtn.addEventListener('mouseleave', function() {
  menuList.classList.remove('show-menu');
});
menuBtn.addEventListener('mouseenter', function() {
  menuList.classList.toggle('show-menu');
});
// menu end

var animateButton = function(e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};
var classname = document.getElementsByClassName("bubbly-button");
for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', animateButton, false);
  
}