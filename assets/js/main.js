// adding hovered class to selected

let list = document.querySelectorAll(".navigation li");

function activeLink(){
    list.forEach((item) => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
    console.log("hover working");

    
}

list.forEach((item) => item.addEventListener("mouseenter", activeLink));