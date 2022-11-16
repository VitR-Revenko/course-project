(function () {
  const message = "html boilerplate";
  console.log(`${message}!!!`);
})();

var modal = document.getElementById("modal");

var btn = document.getElementById("js-modal-open");

var cross = document.getElementById("js-modal-close");

btn.onclick = function () {
  modal.style.display = "block";
};

modal.onclick = function (e) {
  if ([modal, cross].includes(e.target)) {
    modal.style.display = "none";
  }
};
