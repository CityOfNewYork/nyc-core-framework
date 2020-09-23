//////////////////////////////////////////////
// Text Direction
//////////////////////////////////////////////

export default class CopyrightYear {

    constructor() {

        const copyrightYear = document.querySelector(".copyright-year");

        if (copyrightYear) {
            let currentYear = new Date().getFullYear();
            copyrightYear.innerHTML = currentYear;
        }

    }
}