//////////////////////////////////////////////
// Button Focus
//////////////////////////////////////////////

export default class KeyboardFocus{

    constructor() {

        const focusableElementList = document.querySelectorAll("[role='tab'], [data-toggle='accordion'], a[href], button:not([data-type='subtract']):not([data-type='add'])");

        focusableElementList.forEach((focusableElement) => {

            let mouseDown = false;

            focusableElement.addEventListener("mousedown", () => {
                mouseDown = true;
            });

            focusableElement.addEventListener("mouseup", () => {
                mouseDown = false;
            });

            focusableElement.addEventListener("focus", (event) => {
                if (mouseDown) {
                    event.target.blur();
                }
            });

        });

    }
}