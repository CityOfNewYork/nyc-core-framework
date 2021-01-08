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

        // Set form submit to false
        let formSubmitAttempted = false;
        
        formList.forEach((form) => {

            // Submission Handler
            form.addEventListener("submit", (event) => {
                
                formSubmitAttempted = true;

                let errorsArray = [];

                // Create list of elements that fail to validate
                let formErrorsList = form.querySelectorAll(":invalid");

                formErrorsList.forEach((formError) => {

                    let formErrorEntry = formError.closest(".form-entry");
                    let formErrorEntryLabel = formErrorEntry.querySelector(".form-entry__field__label");

                    // Add error class to .form-entry selector
                    formErrorEntry.classList.add("is-invalid");

                    // 
                    const formEntryFeedback = formErrorEntry.querySelector(".form-entry__feedback");

                    let errorDescription = formErrorEntry.getAttribute("data-error-description");
                    let errorInstructions = formErrorEntry.getAttribute("data-error-instructions");
                    let errorFeedback = [errorDescription, errorInstructions];

                    if (formEntryFeedback) {
                        return;
                    } else {
                        formErrorEntryLabel.insertAdjacentHTML('afterend', createErrorMessage(errorDescription, errorInstructions));
                    }

                    // Send errors
                    errorsArray.push(errorFeedback);

                });
                
                // console.log("errorsArray == ", errorsArray);

                // If errors exist, do not submit the form
                if (errorsArray.length > 0) {
                    event.preventDefault();
                }

                // Scroll to error

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

            formEntryInputList.forEach((formEntryInput) => {
                
                // Call focus (in out) functions
                formEntryInput.addEventListener("focusin", focusIn);
                formEntryInput.addEventListener("focusout", focusOut);

                // Set required inputs
                if (formEntry.hasAttribute("data-required")) {

                    formEntryInput.setAttribute("required", "true");

                    formEntryInput.addEventListener("change", () => {
                        console.log("I have changed, I'm different now", formEntryInput.value);

                        if (formSubmitAttempted === true) {
                            checkIfEmpty(formEntryInput);
                        }
                    });
                }


            });

            function focusIn() {
                 this.closest(".form-entry").classList.add("active");
            }

            function focusOut() {
                this.closest(".form-entry").classList.remove("active");
            }

            // Click Into Input
            
            const formEntryFieldInputList = formEntry.querySelectorAll("[class*='form-entry__field__']");

            formEntryFieldInputList.forEach((formEntryField) => {

                const myInput = formEntryField.querySelector("input, select");
                
                formEntryField.addEventListener("click", (event) => {

                    let myTarget = event.target.tagName;
                    
                    if(myTarget === "BUTTON") {
                        return;
                    }

                    if(myTarget === "SPAN") {
                        myInput.focus();
                    }

                });

            });
        
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

        const invalidClasses = ["is-invalid"];

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