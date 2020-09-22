//////////////////////////////////////////////
// Collapse
//////////////////////////////////////////////

class Collapse {

    constructor() {

        const collapseButtonList = document.querySelectorAll("[data-toggle='collapse']");

        for (const collapseButton of collapseButtonList) {

            collapseButton.setAttribute("aria-expanded", false);

            collapseButton.addEventListener("click", (event) => {

                const collapseTargetID = event.target.getAttribute("data-target").replace(/#/, "");

                const collapseTarget = document.getElementById(collapseTargetID);

                collapseTarget.classList.toggle("shown");
            })
        }
    }
}

export default Collapse;