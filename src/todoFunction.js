






const formContainer = document.querySelector(".formContainer")
const closebtn = document.querySelector(".closebtn")

window.addEventListener("click", e => {
    if(e.target == formContainer){
    formContainer.display.style = "none"
    }
})

closebtn.addEventListener("click", () => {
 formContainer.display.style = "none"    
})


export default 