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

        // let wasValidated = false;

        // Array.prototype.slice.call(document.querySelectorAll("form")).forEach((form) => {

        //     // Handle Form Submission

        //     form.addEventListener("submit", function (event) {

        //         event.preventDefault();

        //         wasValidated = true;

        //         let formErrorsList = form.querySelectorAll(":invalid");

        //         for (const formError of formErrorsList) {
        //             checkIfEmpty(formError);
        //         }

        //         let firstError = document.querySelector("[class*='alert']");

        //         if (firstError.hasAttribute("data-alert")) {
        //             firstError.style.display = "block";
        //         }

        //         let myScroll = firstError.offsetTop - 16 + "px";

        //         window.scrollTo({
        //             top: myScroll,
        //             behavior: "smooth"
        //         });

        //     });

        //     function checkIfEmpty(field) {
        //         if (isEmpty(field.value.trim())) {
        //             // Set field invalid
        //             setInvalid(field);
        //             return true;
        //         } else {
        //             // Set field valid
        //             setValid(field);
        //             return false;
        //         }
        //     }

        //     function isEmpty(value = null) {
        //         if (value === "") return true;
        //         return false;
        //     }

        //     const invalidClasses = ["invalid", "alert--warn"];

        //     function setInvalid(field) {
        //         let myEl = field.closest(".form-entry");
        //         myEl.classList.add(...invalidClasses);
        //     }

        //     function setValid(field) {
        //         let myEl = field.closest(".form-entry");
        //         myEl.classList.remove(...invalidClasses);
        //     }

        // });

        // // Input Number Spinner

        // const numberInputList = document.querySelectorAll(".form-entry--number");

        // numberInputList.forEach((numberInput) => {

        //     const spinnerInput = numberInput.querySelector("input[type='number']");
        //     const btnAdd = numberInput.querySelector("[data-type='add']");
        //     const btnSubtract = numberInput.querySelector("[data-type='subtract']");

        //     var minLimit, maxLimit, step;

        //     function init() {

        //         minLimit = makeNumber(getAttribute(spinnerInput, 'min')) || 0,
        //             maxLimit = makeNumber(getAttribute(spinnerInput, 'max')) || 9000,
        //             step = makeNumber(getAttribute(spinnerInput, 'step') || '1');

        //         btnSubtract.addEventListener('click', changeSpinner, false);
        //         btnAdd.addEventListener('click', changeSpinner, false);
        //         btnSubtract.addEventListener('keyup', keySpinner, false);
        //         btnAdd.addEventListener('keyup', keySpinner, false);

        //         if (supportsTouch()) {
        //             btnSubtract.addEventListener('touchend', removeClickDelay, false);
        //             btnAdd.addEventListener('touchend', removeClickDelay, false);
        //         }

        //         if (supportsPointer()) {
        //             btnSubtract.addEventListener('pointerup', removeClickDelay, false);
        //             btnAdd.addEventListener('pointerup', removeClickDelay, false);
        //         }
        //     }

        //     function removeClickDelay(e) {
        //         e.preventDefault();
        //         e.target.click();
        //     }

        //     function makeNumber(inputString) {
        //         return parseInt(inputString, 10);
        //     }

        //     function update(direction) {
        //         var num = makeNumber(spinnerInput.value);
        //         if (direction === 'add') {
        //             console.log("neat");
        //             spinnerInput.value = ((num + step) <= maxLimit) ? (num + step) : spinnerInput.value;
        //         } else if (direction === 'subtract') {
        //             spinnerInput.value = ((num - step) >= minLimit) ? (num - step) : spinnerInput.value;
        //         }
        //     }

        //     function getAttribute(el, attr) {
        //         var hasGetAttr = (el.getAttribute && el.getAttribute(attr)) || null;
        //         if (!hasGetAttr) {
        //             var attrs = el.attributes;
        //             for (var i = 0, len = attrs.length; i < len; i++) {
        //                 if (attrs[i].nodeName === attr) {
        //                     hasGetAttr = attrs[i].nodeValue;
        //                 }
        //             }
        //         }
        //         return hasGetAttr;
        //     }

        //     /* Touch and Pointer support */
        //     function supportsTouch() {
        //         return ('ontouchstart' in window);
        //     }

        //     function supportsPointer() {
        //         return ('pointerdown' in window);
        //     }

        //     /* Keyboard support */
        //     function keySpinner(e) {
        //         switch (e.keyCode) {
        //             case 40:
        //             case 37: // Down, Left
        //                 update('subtract');
        //                 btnSubtract.focus();
        //                 break;
        //             case 38:
        //             case 39:
        //                 // Top, Right
        //                 update('add');
        //                 btnAdd.focus();
        //                 break;
        //         }
        //     }

        //     function changeSpinner(e) {
        //         e.preventDefault();
        //         var increment = getAttribute(e.target, 'data-type');
        //         update(increment);
        //     }

        //     init();

        // });
    
    }
}