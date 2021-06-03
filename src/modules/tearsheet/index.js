import "./_style.scss";

//////////////////////////////////////////////
// Tearsheet
//////////////////////////////////////////////

export default class Tearsheet {

    constructor() {

        const tsToggleButton = document.querySelector("[data-toggle='ts-menu']");
        const tsContainer = document.querySelector(".tearsheet");

        if(tsToggleButton) {

            tsToggleButton.setAttribute("aria-expanded", false);

            tsToggleButton.addEventListener("click", (event) => {

                event.preventDefault();
                tsContainer.classList.toggle("menu-shown");
                
            });
            
        }

    }
}