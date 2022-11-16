(function () {
  const message = "html boilerplate";
  console.log(`${message}!!!`);
})();

var menu = document.getElementById("menu");

var contact = document.getElementById("contact");

var menuBtn = document.getElementById("js-menu-open");

var contactBtn = document.getElementById("js-contact-open");

var menuClose = document.getElementById("js-menu-close");

var contactClose = document.getElementById("js-contact-close");

menuBtn.onclick = function () {
  menu.style.display = "block";
};

menuClose.onclick = function() {
  menu.style.display = "none";
}


menu.onclick = function (e) {
  if ([menu, menuClose].includes(e.target)) {
    menu.style.display = "none";
  }
};

contactBtn.onclick = function () {
  contact.style.display = "block";
};

contactClose.onclick = function() {
  contact.style.display = "none";
}
