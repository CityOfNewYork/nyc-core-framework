import 'element-closest-polyfill';

window.onload = () => {

    //////////////////////////////////////////////
    // B. Dropdowns
    //////////////////////////////////////////////

    const dropdownButtonList = document.querySelectorAll('[data-toggle="dropdown"]');

    for (const dropdownButton of dropdownButtonList) {

        let dropdownButtonParent = dropdownButton.closest('li');
        let dropdownMenu = dropdownButton.nextElementSibling;

        dropdownButton.setAttribute("aria-expanded", false);

        dropdownButton.addEventListener('click', function (event) {

            event.preventDefault();

            dropdownMenu.classList.toggle('shown');

            let expanded = dropdownButton.getAttribute("aria-expanded");

            if (expanded == "true") {
                dropdownButton.setAttribute("aria-expanded", false);
                return;
            } else if (expanded === "false") {
                dropdownButton.setAttribute("aria-expanded", true);
                return;
            }
        });

        window.addEventListener('click', function (event) {

            let dropdownButtonClick = dropdownButtonParent.contains(event.target);

            if (!dropdownButtonClick) {
                dropdownMenu.classList.remove('shown');
                dropdownButton.setAttribute("aria-expanded", false);
            }
        });
    }

    //////////////////////////////////////////////
    // B. Accordion
    //////////////////////////////////////////////

    Array.prototype.slice.call(document.querySelectorAll('.accordion-group')).forEach(function (accordion) {

        const accButtonList = accordion.querySelectorAll('[data-toggle="accordion"]');
        const accPanelList = accordion.querySelectorAll('[data-accordion="panel"]');

        for (const accordionButton of accButtonList) {

            accordionButton.setAttribute("tabindex", 0);
            
            let currentAccordionPanel = accordionButton.nextElementSibling;
            let expanded = accordionButton.getAttribute("aria-expanded");

            if (expanded === "true") {
                currentAccordionPanel.style.maxHeight = currentAccordionPanel.scrollHeight + "px";
                currentAccordionPanel.classList.add('show');
            } else {
                accordionButton.setAttribute("aria-expanded", false);
                currentAccordionPanel.style.maxHeight = null;
                currentAccordionPanel.setAttribute("aria-hidden", true);
            }

            const initAccordion = () => {

                event.stopPropagation();
                event.preventDefault();

                let elementName = Element.tagName = event.target.tagName;

                // console.log(elementName);

                for (const otherAccordionPanel of accPanelList) {

                    otherAccordionPanel.classList.remove('show');

                    if (otherAccordionPanel !== currentAccordionPanel) {
                        otherAccordionPanel.classList.remove('shown');
                        otherAccordionPanel.style.maxHeight = null;
                        otherAccordionPanel.previousElementSibling.setAttribute("aria-expanded", false);
                        otherAccordionPanel.setAttribute("aria-hidden", true);
                    }
                }

                currentAccordionPanel.classList.toggle('shown');

                let expanded = accordionButton.getAttribute("aria-expanded");

                if (expanded === "true") {
                    accordionButton.setAttribute("aria-expanded", false);
                    currentAccordionPanel.setAttribute("aria-hidden", true);
                } else if (expanded === "false") {
                    accordionButton.setAttribute("aria-expanded", true);
                    currentAccordionPanel.setAttribute("aria-hidden", false);
                }

                if (currentAccordionPanel.style.maxHeight) {
                    currentAccordionPanel.style.maxHeight = null;
                } else {
                    currentAccordionPanel.style.maxHeight = currentAccordionPanel.scrollHeight + "px";
                    currentAccordionPanel.setAttribute("aria-hidden", false);
                }
            }

            accordionButton.addEventListener('click', (event) => {
                initAccordion(event);
            });

            accordionButton.addEventListener('keyup', (event) => {
                if (event.keyCode === 13 && event.target.tagName !== 'BUTTON') {
                    console.log(event.target.tagName);
                    initAccordion(event);
                } else {
                    return;
                }
            });
        }

    }); // end for

    //////////////////////////////////////////////
    // D. Toggle
    //////////////////////////////////////////////

    const collapseButtonList = document.querySelectorAll('[data-toggle="collapse"]');

    for (const collapseButton of collapseButtonList) {

        collapseButton.setAttribute("aria-expanded", false);

        collapseButton.addEventListener('click', (event) => {

            console.log(event.target.tagName);

            const collapseTargetID = event.target.getAttribute('data-target').replace(/#/, '');

            const collapseTarget = document.getElementById(collapseTargetID);

            collapseTarget.classList.toggle('shown');
        })
    }

    //////////////////////////////////////////////
    // E. Forms
    //////////////////////////////////////////////

    const inputFieldList = document.querySelectorAll('input[type="text"], textarea, select');

    for (const inputField of inputFieldList) {

        inputField.addEventListener('change', (event) => {

            if (inputField.value.length != 0) {
                inputField.closest('label').classList.add('has-value');
            } else {
                inputField.closest('label').classList.remove('has-value');
            }

        });

    }

    //////////////////////////////////////////////
    // E. External Links
    //////////////////////////////////////////////

    const externalLinks = document.querySelectorAll('[data-link="external"]');

    for (const link of externalLinks) {
        link.insertAdjacentHTML('beforeend', '<span class="sr-only">Opens a new window</span>');
    }

    //////////////////////////////////////////////
    // F. Modal
    //////////////////////////////////////////////

    var focusedElementBeforeModal, modal, registerButton;

    var KEY = {
        ESCAPE: 27,
        TAB: 9
    }

    // Required null checks

    if (document.querySelector('.modal') && document.querySelector('.open-modal')) {
        modal = document.querySelector('.modal');
        registerButton = document.querySelector('.open-modal');
        registerButton.addEventListener('click', openModal);
    }

    function openModal() {

        // element that was focused before modal opened
        // we will focus back on this when modal is closed
        focusedElementBeforeModal = document.activeElement;

        modal.style.display = 'block';
        // add the key listener  
        modal.addEventListener('keydown', processEscapeTabKeys);

        // Find all focusable modal elements
        var modalElements = 'input:not([disabled]), button:not([disabled])';
        var focusableElements = modal.querySelectorAll(modalElements);

        // Convert NodeList to Array only for IE 11
        //focusableElements = Array.prototype.slice.call(focusableElements);

        var firstElementOfModal = focusableElements[0];
        var lastElementOfModal = focusableElements[focusableElements.length - 1];

        // Focus on first element of the modal - firstName
        firstElementOfModal.focus();

        function processEscapeTabKeys(event) {
            // handle TAB key
            if (event.keyCode === KEY.TAB) {
                if (document.activeElement === lastElementOfModal) {
                    event.preventDefault();
                    firstElementOfModal.focus();
                }
            }
            // handle ESCAPE key to close the modal
            if (event.keyCode === KEY.ESCAPE) {
                modal.style.display = 'none';
                // Focus to the register button (the last focus before modal was opened)
                focusedElementBeforeModal.focus();
            }
        }
    }

}; /* window.load */