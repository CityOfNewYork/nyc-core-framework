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

    window.onload = () => {

        const externalLinks = document.querySelectorAll('[data-link="external"]');

        for (const link of externalLinks) {
            link.insertAdjacentHTML('beforeend', '<span class="sr-only">Opens a new window</span>');
        }
    };

}; /* window.load */