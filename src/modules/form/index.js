import "./_style.scss";

//////////////////////////////////////////////
// Form
//////////////////////////////////////////////

export default class Form {

    constructor() {

        const formList = document.querySelectorAll("form[novalidate]");
        const formEntryList = document.querySelectorAll(".form-entry");
        let formSubmitAttempted = false;

        formList.forEach((form) => {

            // Handle Form Submission

            form.addEventListener("submit", (event) => {

                formSubmitAttempted = true;

                let errors = [];
                let formErrorsList = form.querySelectorAll(":invalid");

                formErrorsList.forEach((formError) => {
                    errors.push(formError.closest(".form-entry").querySelector(".form-entry__feedback").innerText);
                    checkIfEmpty(formError);
                });

                if(errors.length > 0){
                    event.preventDefault();
                    console.log("WHOOOOOOPS!!!!!!!!!!! ", errors);
                } else {
                    return;
                }

                let firstError = form.querySelector("[class*='alert'], [class*='invalid']");

                if (firstError.hasAttribute("data-alert")) {
                    firstError.style.display = "block";
                }

                let myScroll = firstError.offsetTop - 16;

                window.scrollTo({
                    top: myScroll,
                    behavior: "smooth"
                });

            });

        });

        formEntryList.forEach((formEntry) => {

            const formEntryInput = formEntry.querySelector("input, select, textarea");
            const formEntryInputParent = formEntryInput.parentNode;

            let errorIcon = document.createElement("span");
            errorIcon.classList.add("nyc_icon_warn");

            // Required

            if(formEntryInput.hasAttribute("aria-required")) {
                console.log("This entry is required!");
                formEntryInput.setAttribute("required", "true");
                formEntry.classList.add("is-required");
                
                formEntryInputParent.insertBefore(errorIcon, formEntryInput);

            }

            console.log("Form Entry = ", formEntry);
            console.log("Form Entry Input = ", formEntryInput);

            formEntryInput.addEventListener("change", () => {
                console.log("I have changed, I'm different now", formEntryInput.value);

                if (formSubmitAttempted === true) {
                    checkIfEmpty(formEntryInput);
                }
            });

            // Click Into Input
            
            const formEntryFieldInputList = formEntry.querySelectorAll("[class*='form-entry__field__input']");

            formEntryFieldInputList.forEach((formEntryField) => {

                const myInput = formEntryField.querySelector("input, select");
                
                formEntryField.addEventListener("click", (event) => {

                    let myTarget = event.target.tagName;
                    
                    if(myTarget === "BUTTON") {
                        return;
                    }

                    if(myTarget === "SPAN") {
                        myInput.focus();
                        console.log("I have been clicked!!!!!!", myTarget);
                    }

                });

            });
            
            // Focus
            
            formEntryInput.addEventListener("focusin", focusIn);
            formEntryInput.addEventListener("focusout", focusOut);

            function focusIn() {
                 this.closest(".form-entry").classList.add("active");
                console.warn("I'm in!");
            }

            function focusOut() {
                this.closest(".form-entry").classList.remove("active");
                console.warn("I'm out!");
            }
        
        });
    
        const checkIfEmpty = (field) => {
            if (isEmpty(field.value.trim())) {
                setInvalid(field);
                return true;
            } else {
                setValid(field);
                return false;
            }
        }

        const isEmpty = (value = null) => {
            if (value === "") return true;
            return false;
        }

        const invalidClasses = ["invalid"];

        const setInvalid = (field) => {
            let entryRoot = field.closest(".form-entry");
            entryRoot.classList.add(...invalidClasses);
        }

        const setValid = (field) => {
            let entryRoot = field.closest(".form-entry");
            entryRoot.classList.remove(...invalidClasses);
        }
    
    }
}