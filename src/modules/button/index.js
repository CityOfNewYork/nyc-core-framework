import "./_style.scss";

//////////////////////////////////////////////
// Alerts
//////////////////////////////////////////////

export default class Button {

    constructor() {

        const iconOnlyButtonList = document.querySelectorAll(".button--icon-only");

        iconOnlyButtonList.forEach((iconOnlyButton) => {

            const tooltipText = iconOnlyButton.getAttribute("aria-label");

            const tooltipHTML = `
            <span class="button__tooltip">
                ${tooltipText}
            </span>`;

            iconOnlyButton.insertAdjacentHTML('beforeend', tooltipHTML);

        });
    }
}