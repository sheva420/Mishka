var popup = document.querySelector(".popup");
var popup_open = document.querySelector(".video__button");
var popup_close = document.querySelector(".popup__button");
var popup_close2 = document.querySelector(".popup__background")

popup_open.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("popup--show");
})

popup_close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("popup--show");
})

popup_close2.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("popup--show");
})