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

            if(tooltipText) {

                iconOnlyButton.insertAdjacentHTML('beforeend', tooltipHTML);
                
                const buttonTooltip = iconOnlyButton.querySelector(".button__tooltip");

                const buttonTooltipWidth = buttonTooltip.offsetWidth / 2;
                const buttonPositionLeft = iconOnlyButton.offsetLeft ;
                const buttonPositionRight = window.innerWidth - (iconOnlyButton.offsetLeft + iconOnlyButton.offsetWidth);

                if (buttonTooltipWidth > buttonPositionLeft) {
                    buttonTooltip.classList.add("left");
                }

                if (buttonTooltipWidth > buttonPositionRight) {
                    buttonTooltip.classList.add("right");
                }

                // iconOnlyButton.addEventListener("click", (event) => {

                //     event.preventDefault();

                //     console.log(`
                //         I am ${iconOnlyButton.offsetWidth} pixels wide
                //         My Tooltip is ${buttonTooltipWidth} pixels wide
                //         I am ${buttonPositionLeft} from the left
                //         I am ${buttonPositionRight} from the right
                //     `);

                //     if (buttonTooltipWidth > buttonPositionLeft) {

                //         console.log("I AM TOO BIG!!");

                //         buttonTooltip.classList.add("cool");

                //     }
                // });
            }
            
        });
    }
}