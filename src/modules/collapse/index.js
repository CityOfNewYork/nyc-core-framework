import "./_style.scss";

//////////////////////////////////////////////
// Collapse
//////////////////////////////////////////////

export default class Collapse {

    constructor() {

        const collapseButtonList = document.querySelectorAll("[data-toggle='collapse']");

        collapseButtonList.forEach((collapseButton) => {

            collapseButton.setAttribute("aria-expanded", false);
    
            collapseButton.addEventListener("click", (event) => {
    
                const collapseTargetID = event.target.getAttribute("data-target").replace(/#/, "");
    
                const collapseTarget = document.getElementById(collapseTargetID);
    
                collapseTarget.classList.toggle("shown");
            });

        });
        
    }
}