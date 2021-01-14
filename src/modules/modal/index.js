import "./_style.scss";

//////////////////////////////////////////////
// Modal
//////////////////////////////////////////////

export default class Modal {

    constructor() {

        const modalList = document.querySelectorAll(".modal");
        const modalButtonList = document.querySelectorAll("[data-modal-open]");

        const initModal = (modalTarget) => {

            modalTarget.setAttribute("aria-hidden", false);

            // Element that was focused before modal opened
            let focusedElementBeforeModal = document.activeElement;

            // Add the key listener  
            modalTarget.addEventListener("keydown", processEscapeTabKeys);

            const modalCloseList = modalTarget.querySelectorAll("[data-modal-close]");

            for (const modalClose of modalCloseList) {
                modalClose.addEventListener("click", closeModal);
                modalClose.setAttribute("aria-label", "Close Modal Window");
            }

            // Find all focusable modal elements
            const modalElements = "input:not([disabled]), button:not([disabled]), a:not([disabled]";
            let focusableElements = modalTarget.querySelectorAll(modalElements);

            const firstElementOfModal = focusableElements[0];
            const lastElementOfModal = focusableElements[focusableElements.length - 1];

            // Focus on first element of the modal - firstName
            firstElementOfModal.focus();

            function closeModal() {
                modalTarget.setAttribute("aria-hidden", true);
                focusedElementBeforeModal.focus();
            }

            function processEscapeTabKeys(event) {

                // TAB key handler
                if (event.keyCode === 9) {
                    if (document.activeElement === lastElementOfModal) {
                        event.preventDefault();
                        firstElementOfModal.focus();
                    }
                }

                // ESCAPE key handler (close the modal)
                if (event.keyCode === 27) {
                    closeModal();
                }
            }
        }

        modalList.forEach((modal) => {
            
            const modalContainer = modal.querySelector(".modal__content");
            // const modalOverlay = modal.querySelector(".modal__overlay");
    
            // modalOverlay.setAttribute("tabindex",  "-1");
    
            modalContainer.setAttribute("role", "dialog");
            modalContainer.setAttribute("aria-modal", "true");
    
            modal.setAttribute("aria-hidden", true);

        });

        modalButtonList.forEach((modalButton) => {
            
            modalButton.addEventListener("click", (event) => {
    
                const modalTargetID = event.target.getAttribute("data-modal-open").replace(/#/, "");
                const modalTarget = document.getElementById(modalTargetID);
    
                initModal(modalTarget);
                
            });

        });
        
    }
}