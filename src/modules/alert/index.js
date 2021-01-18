import "./_style.scss";

//////////////////////////////////////////////
// Google Translate Buttons
//////////////////////////////////////////////

export default class Alert {

    constructor() {
        
        const alertDismissableList = document.querySelectorAll(".alert--dismissable");

        const closeButtonHTML = `
        <button class="button button--icon-only">
            <span class="nyc_icon_close" aria-hidden="true">
        </button>`;

        alertDismissableList.forEach((alertDismissable) => {

            const alertTitleBar = alertDismissable.querySelector(".alert__title");

            alertTitleBar.insertAdjacentHTML('beforeend', closeButtonHTML);

            const alertCloseButton = alertTitleBar.querySelector("button");

            alertCloseButton.addEventListener("click", (event) => {
                
                event.preventDefault();

                alertDismissable.classList.add("dismissed");

                const dismissed = document.querySelector('.dismissed');

                dismissed.addEventListener('animationend', () => {
                    alertDismissable.remove();
                });

            });

        });
    }
}