import "./_style.scss";

//////////////////////////////////////////////
// Form
//////////////////////////////////////////////

export default class Form {

    constructor() {

        // Get each form on page
        const formList = document.querySelectorAll("form[novalidate]");
        
        // Get each form entry on page (with and without form parent)
        const formEntryList = document.querySelectorAll(".form-entry");
        
        let formSubmitAttempted = false;
        
        formList.forEach((form) => {

            // Submission Handler

            form.addEventListener("submit", (event) => {
                
                
                event.preventDefault();
                
                formSubmitAttempted = true;

                let errorsArray = [];

                let formErrorsList = form.querySelectorAll(":invalid");

                formErrorsList.forEach((formError) => {

                    let formErrorEntry = formError.closest(".form-entry");
                    let formErrorEntryField = formErrorEntry.querySelector(".form-entry__field__label");
                    let formErrorFieldType = formError.tagName;

                    formErrorEntry.classList.add("is-invalid");

                    console.log("Form Error Field Type is :: ", formErrorFieldType);
                    
                    const feedback = formErrorEntry.querySelector(".form-entry__feedback");

                    let errorDescription = formErrorEntry.getAttribute("data-error-description");
                    let errorInstructions = formErrorEntry.getAttribute("data-error-instructions");
                    let errorFeedback = [errorDescription, errorInstructions];

                    if(feedback){
                        return;
                    } else {
                        formErrorEntryField.insertAdjacentHTML('afterend', createErrorMessage(errorDescription, errorInstructions));
                    }

                    errorsArray.push(errorFeedback);

                });
                
                console.log("errorsArray == ", errorsArray);

                if (errorsArray.length > 0) {
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

            const inputSelectors = "input, select, textarea";

            const formEntryInputList = formEntry.querySelectorAll(inputSelectors);

            if (formEntry.hasAttribute("data-required")) {


            formEntryInputList.forEach((formEntryInput) => {
                
                formEntryInput.setAttribute("required", "true");

                formEntryInput.addEventListener("change", () => {
                    console.log("I have changed, I'm different now", formEntryInput.value);

                    if (formSubmitAttempted === true) {
                        checkIfEmpty(formEntryInput);
                    }
                });

            })

            }

            let errorIcon = document.createElement("span");
            errorIcon.classList.add("nyc_icon_warn");

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
                        // console.log("I have been clicked!!!!!!", myTarget);
                    }

                });

            });
            
            // Focus
            
            formEntryInput.addEventListener("focusin", focusIn);
            formEntryInput.addEventListener("focusout", focusOut);

            function focusIn() {
                 this.closest(".form-entry").classList.add("active");
                // console.warn("I'm in!");
            }

            function focusOut() {
                this.closest(".form-entry").classList.remove("active");
                // console.warn("I'm out!");
            }
        
        });
    
        const createErrorMessage = ((desc = "Error message description", inst = "How to fix instructions") => {
            return `<div class="form-entry__feedback">
                        <small>
                            <span class="nyc_icon_warn" aria-hidden="true"></span>
                            <strong>${desc}</strong>
                            <span>${inst}</span>
                        </small>
                    </div>`;
        });

        const checkIfEmpty = (field) => {
            if (isEmpty(field.value)) {
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