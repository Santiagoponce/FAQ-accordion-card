const preguntas= document.querySelectorAll(".faq__question");


preguntas.forEach(pregunta=>{
    pregunta.addEventListener("click",(e)=>{
    e.target.parentElement.lastElementChild.classList.toggle("hidden")
    });
}
);