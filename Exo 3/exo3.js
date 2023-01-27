const paragrapheStyle = document.querySelector("p");
console.log(paragrapheStyle);

paragrapheStyle.addEventListener("click", (event) => {
    paragrapheStyle.classList.add("style1");
    paragrapheStyle.innerHTML = "Je suis stylé maintenant !";
})