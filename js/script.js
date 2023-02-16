const questions= document.querySelectorAll(".faq__question");

questions.forEach(question=>{
    question.addEventListener("click",(e)=>{
    e.target.parentElement.lastElementChild.classList.toggle("hidden");
    e.target.classList.toggle("faq__question--active")
    });
}
);

