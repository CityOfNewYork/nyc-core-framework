//////////////////////////////////////////////
// Text Direction
//////////////////////////////////////////////

class TextDirection {

    constructor() {

        const copyrightYear = document.querySelector(".copyright-year");

        if (copyrightYear) {
            let currentYear = new Date().getFullYear();
            copyrightYear.innerHTML = currentYear;
        }

    }
}

export default TextDirection;