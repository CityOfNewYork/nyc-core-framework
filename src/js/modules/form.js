//////////////////////////////////////////////
// Form
//////////////////////////////////////////////

export default class Form {

    constructor() {

        const formEntryFieldList = document.querySelectorAll(".form-entry__field");

        formEntryFieldList.forEach((formEntryField) => {

            let entryInput = formEntryField.querySelector(".form-entry__field__input");
            let entryButtonList = formEntryField.querySelectorAll("button");

            entryInput.addEventListener("focusin", focusIn);
            entryInput.addEventListener("focusout", focusOut);

            entryButtonList.forEach((entryButton) => {
                entryButton.addEventListener("focusin", focusIn);
                entryButton.addEventListener("focusout", focusOut);
                entryButton.addEventListener("mousedown", focusIn);
            });

            entryInput.addEventListener("change", () => {

                if (entryInput.value != "") {
                    entryInput.closest(".form-entry").classList.add("has-value");
                } else {
                    entryInput.closest(".form-entry").classList.remove("has-value");
                }

            });
            
            function focusIn() {
                this.closest(".form-entry").classList.add("active");
                console.warn("I'm in!");
            }

            function focusOut() {
                this.closest(".form-entry").classList.remove("active");
                console.warn("I'm out!");
            }

        });

        const formList = document.querySelectorAll("form");

        formList.forEach((form) => {

            let coolList = form.querySelectorAll(".form-entry__field__input");

            coolList.forEach((cool) => {

                cool.addEventListener("change", () => {

                    if (cool.value != "") {
                        setValid(cool);
                    } else {
                        setInvalid(cool);
                    }

                });
            });

            // Handle Form Submission

            const alertMessage = document.getElementById("neat");


            form.addEventListener("submit", function (event) {

                event.preventDefault();

                let formErrorsList = form.querySelectorAll(":invalid");

                for (const formError of formErrorsList) {
                    checkIfEmpty(formError);
                }

                let firstError = form.querySelector("[class*='alert']");

                if (firstError.hasAttribute("data-alert")) {
                    firstError.style.display = "block";
                }

                let myScroll = firstError.offsetTop - 16;

                window.scrollTo({
                    top: myScroll,
                    behavior: "smooth"
                });

            });

            function checkIfEmpty(field) {
                if (isEmpty(field.value.trim())) {
                    // Set field invalid
                    setInvalid(field);
                    return true;
                } else {
                    // Set field valid
                    setValid(field);
                    return false;
                }
            }

            function isEmpty(value = null) {
                if (value === "") return true;
                return false;
            }

            const invalidClasses = ["invalid", "alert--warn"];

            function setInvalid(field) {
                let myEl = field.closest(".form-entry");
                myEl.classList.add(...invalidClasses);
            }

            function setValid(field) {
                let myEl = field.closest(".form-entry");
                myEl.classList.remove(...invalidClasses);
            }

        });
    
    }
}