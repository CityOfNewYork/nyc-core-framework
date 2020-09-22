//////////////////////////////////////////////
// Dropdown
//////////////////////////////////////////////

class Dropdown {

    constructor() {

        const dropdownButtonList = document.querySelectorAll("[data-toggle='dropdown']");

        for (const dropdownButton of dropdownButtonList) {

            let dropdownButtonParent = dropdownButton.closest("li");
            let dropdownMenu = dropdownButton.nextElementSibling;

            dropdownButton.setAttribute("aria-expanded", false);

            dropdownButton.addEventListener("click", (event) => {

                event.preventDefault();

                dropdownMenu.classList.toggle("shown");

                let expanded = dropdownButton.getAttribute("aria-expanded");

                if (expanded == "true") {
                    dropdownButton.setAttribute("aria-expanded", false);
                    return;
                } else if (expanded === "false") {
                    dropdownButton.setAttribute("aria-expanded", true);
                    return;
                }
            });

            window.addEventListener("click", (event) => {

                let dropdownButtonClick = dropdownButtonParent.contains(event.target);

                if (!dropdownButtonClick) {
                    dropdownMenu.classList.remove("shown");
                    dropdownButton.setAttribute("aria-expanded", false);
                }
            });
        }

    }
}

export default Dropdown;