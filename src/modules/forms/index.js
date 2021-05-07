import "./_style.scss";

//////////////////////////////////////////////
// Form
//////////////////////////////////////////////

export default class Forms {

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

                    // Form Entry Feedback
                    const formEntryFeedback = formErrorEntry.querySelector(".form-entry__feedback");

                    let errorDescription = formErrorEntry.getAttribute("data-error-description");
                    let errorInstructions = formErrorEntry.getAttribute("data-error-instructions");
                    let errorFeedback = [errorDescription, errorInstructions];

                    // Send errors to errorArray
                    errorsArray.push(errorFeedback);

                    if (formEntryFeedback === null) {
                        formErrorEntryLabel.insertAdjacentHTML('afterend', createErrorMessage(errorDescription, errorInstructions));
                    }
                });

                // If errors exist, do not submit the form
                if (errorsArray.length > 0) {
                    event.preventDefault();
                }
                
                // Scroll to first error

                let firstError = form.querySelector("[class*='alert'], [class*='invalid']");
                
                if (firstError) {

                    if (firstError.hasAttribute("data-alert")) {
                        firstError.style.display = "block";
                    }

                    let myScroll = firstError.offsetTop - 16;

                    window.scrollTo({
                        top: myScroll,
                        behavior: "smooth"
                    });
                }

            });

        });

        formEntryList.forEach((formEntry) => {

            const inputSelectors = "input, select, textarea";

            const formEntryInputList = formEntry.querySelectorAll(inputSelectors);

            let isRequired;

            if(formEntry.hasAttribute("data-required")) {
                isRequired = true;
            } else {
                isRequired = false;
            }

            formEntryInputList.forEach((formEntryInput) => {
                
                const isInputText = formEntry.querySelector(".form-entry__field__input");
                
                const inputTag = formEntryInput.tagName;

                let activeTarget = ".form-entry";

                if (inputTag === "INPUT") {
                    const inputType = formEntryInput.getAttribute("type");

                    if (inputType == "radio" || inputType == "checkbox") {
                        activeTarget = "label";
                        
                        if (formEntryInput.disabled) {
                            formEntryInput.closest("label").classList.add("disabled");
                        }

                    }

                }
                
                // Call focus (in out) functions
                formEntryInput.addEventListener("focusin", focusIn);
                formEntryInput.addEventListener("focusout", focusOut);

                function focusIn() {
                    this.closest(activeTarget).classList.add("active");
                }

                function focusOut() {
                    this.closest(activeTarget).classList.remove("active");
                }
                
                // Set required inputs
                if (isRequired === true) {  
                    formEntryInput.setAttribute("required", "true");
                    formEntryInput.setAttribute("aria-required", true);
                }
                
                formEntryInput.addEventListener("change", () => {

                    if (formSubmitAttempted === true && isRequired === true) {
                        checkIfEmpty(formEntryInput);
                    }

                    if (formEntryInput.value != "") {
                        formEntryInput.closest(".form-entry").classList.add("has-value");
                    } else {
                        formEntryInput.closest(".form-entry").classList.remove("has-value");
                    }
                });

                // Put click into input stuff here

                if (isInputText) {
                    isInputText.addEventListener("click", (event) => {

                        let clickTarget = event.target.tagName;
                        let clickInput = event.target.closest(".form-entry__field__input").querySelector("input");

                        if(clickTarget === "SPAN") {
                            console.log(event.target.nextSibling)
                            clickInput.focus();
                        }

                        if(clickTarget === "BUTTON") {
                            return;
                        }

                    });
                }

            });
        
        });
    
        const createErrorMessage = ((desc, inst) => {
            
            if(desc === null) {
                desc = "This field is Required";
            }

            if (inst === null) {
                inst = "Complete this field";
            }

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

        // File Upload

        const fileUploadList = document.querySelectorAll('.file-upload');

        fileUploadList.forEach((fileUpload) => {

            const fileUploadInput = fileUpload.querySelector('input[type="file"]');

            fileUploadInput.addEventListener('change', (event) => {

                const [file] = event.target.files;
                const { name: fileName, size } = file;
                const fileSize = (size / 1000).toFixed(2);

                const dataHTML = `
                <span class="file-upload__data">
                    <span class="file-name">${fileName}</span>
                    <span class="file-size">${fileSize} kb</span>
                </span>
                `;

                const fileUploadData = fileUpload.querySelector(".file-upload__data");

                if (fileUploadData) {
                    fileUploadData.remove();
                }

                fileUpload.insertAdjacentHTML('beforeend', dataHTML);

            });

            const dragOver = () => {
                fileUpload.closest('.form-entry').classList.add('active');
            }

            const dragOff = () => {
                fileUpload.closest('.form-entry').classList.remove('active');
            }

            const dropped = () => {
                fileUpload.closest('.form-entry').classList.remove('active');
            }

            fileUpload.addEventListener("dragenter", dragOver);
            fileUpload.addEventListener("dragleave", dragOff);
            fileUpload.addEventListener("dragend", dragOff);
            fileUpload.addEventListener("drop", dropped);
        });
    }
}