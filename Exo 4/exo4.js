const maListe = document.querySelectorAll("#maListe li");
const changeColorButton = document.getElementById("bouton");

changeColorButton.addEventListener("click",(event) =>{
    maListe.forEach((element) => {
        element.classList.toggle("rouge");
        element.classList.toggle("black");
    })
})