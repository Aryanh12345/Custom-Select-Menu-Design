let option = document.querySelector(".option");
let p = document.querySelectorAll(".p");
let select = document.querySelector("#selectField");
let arrow = document.querySelector("#arrow");
let content = document.querySelector("#content");

select.addEventListener("click", () => {
    if(option.style.visibility == "visible"){
        arrow.style.transform = "rotate(0deg)";
        option.style.visibility = "hidden";
    } else {
        arrow.style.transform = "rotate(180deg)";
        option.style.visibility = "visible";
    }
})

p.forEach(element => {
    element.addEventListener('click',(e) => {
        e.preventDefault();
        content.innerHTML = e.target.innerText;
        arrow.style.transform = "rotate(0deg)";
        option.style.visibility = "hidden";
    })
});