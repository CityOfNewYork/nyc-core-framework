//////////////////////////////////////////////
// Aria Current
//////////////////////////////////////////////

export default class AriaCurrent {

    constructor() {

        const focusableButtonList = document.querySelectorAll("[role='tab'], [data-toggle='accordion'], a[href], button:not([data-type='subtract']):not([data-type='add'])");

        focusableButtonList.forEach((focusableButton) => {

            let mouseDown = false;

            focusableButton.addEventListener("mousedown", () => {
                mouseDown = true;
            });

            focusableButton.addEventListener("mouseup", () => {
                mouseDown = false;
            });

            focusableButton.addEventListener("focus", (event) => {
                if (mouseDown) {
                    event.target.blur();
                }
            });

        });

    }
}