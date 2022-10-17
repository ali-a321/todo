

const formContainer = document.querySelector(".formContainer");
const closebtn = document.querySelector(".closebtn");
const addbtn = document.querySelector(".addbtn");

// window.addEventListener("click", (e) => {
//     if (e.target == formContainer) {
//     formContainer.style.display = "none";
//     }
// });

closebtn.addEventListener("click", () => {
    formContainer.style.display = "none";
   });

addbtn.addEventListener("click", ()=> {
    formContainer.style.display = "inline-block";
});

const Project = function(title,description,date,priority){
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
};

const Task = function(title,description,date,priority,type){
    Project(title,description,date,priority);
    this.type = type;
};

let listOfTasks = [];

const submitbtn = document.querySelector(".submitbtn");

submitbtn.addEventListener('click', () => {
    submission = new Project(title.value,description.value,date.value,priority.value)
    listOfTasks.push(submission)
    console.log(listOfTasks)
    render()
});
console.log("hello")

function render(){
    listOfTasks.forEach((submission) => {
        const newTask = document.createElement("article");
        newTask.innerHTML = 
        `<p> ${submission.title} </p>
        <p> by ${submission.description} </p>
        <p> ${submission.date} pages</p>
        <p> ${submission.priority} </p> `;
        document.querySelector(".content").appendChild(newTask);
        console.log("hello")
        });
        console.log("hello")
}



