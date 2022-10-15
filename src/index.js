

const formContainer = document.querySelector(".formContainer");
const closebtn = document.querySelector(".closebtn");
const addbtn = document.querySelector(".addbtn");

window.addEventListener("click", (e) => {
    if (e.target == formContainer) {
    formContainer.style.display = "none";
    }
});

closebtn.addEventListener("click", () => {
    formContainer.style.display = "none";
   });

addbtn.addEventListener("click", ()=> {
    formContainer.style.display = "inline-block";
});




