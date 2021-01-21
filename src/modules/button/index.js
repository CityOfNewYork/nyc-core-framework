import "./_style.scss";

//////////////////////////////////////////////
// Alerts
//////////////////////////////////////////////

export default class Button {

    constructor() {

        const iconOnlyButtonList = document.querySelectorAll(".button--icon-only");

        let hoverFocusDelay;

        const hoverFocusIn = (event) => {
           hoverFocusDelay = setTimeout(() => { 
                iconOnlyButtonList.forEach((iconOnlyButton) => {
                    iconOnlyButton.classList.remove("tooltip-show");
                });

                event.target.classList.add("tooltip-show");
             }, 300);
        };

        const hoverFocusOut = (event) => {
            clearTimeout(hoverFocusDelay);
            event.target.classList.remove("tooltip-show");
        }

        iconOnlyButtonList.forEach((iconOnlyButton) => {

            const tooltipText = iconOnlyButton.getAttribute("aria-label");

            const tooltipHTML = `
            <span class="button__tooltip">
                ${tooltipText}
            </span>`;

            if(tooltipText) {

                iconOnlyButton.insertAdjacentHTML('beforeend', tooltipHTML);
                
                const buttonTooltip = iconOnlyButton.querySelector(".button__tooltip");

                const tooltipPosition = () => {

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

                    // });

                };

                tooltipPosition();

                iconOnlyButton.addEventListener("mouseenter", hoverFocusIn);
                iconOnlyButton.addEventListener("focus", hoverFocusIn);

                iconOnlyButton.addEventListener("mouseleave", hoverFocusOut);
                iconOnlyButton.addEventListener("blur", hoverFocusOut);

                window.addEventListener("resize", tooltipPosition);

            }
            
        });
    }
}