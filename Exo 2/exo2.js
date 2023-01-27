const monParagraphe = document.querySelector("#monParagraphe");

monParagraphe.innerHTML = "Salut c'est Barack Obama";

monParagraphe.insertAdjacentHTML("beforeend", "<p>Bonjour</p>");

const monDeuxiemeParagraphe = document.querySelector("#monDeuxiemeParagraphe");

monDeuxiemeParagraphe.remove();