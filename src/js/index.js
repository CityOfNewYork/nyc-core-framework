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

    const accButtonList = document.querySelectorAll('[data-toggle="accordion"]');
    const accPanelList = document.querySelectorAll('[data-accordion="panel"]');

    for (const accordionButton of accButtonList) {

        let currentAccordionPanel = accordionButton.nextElementSibling;

        accordionButton.setAttribute("aria-expanded", false);

        accordionButton.addEventListener('click', function (event) {

            event.preventDefault();

            for (const otherAccordionPanel of accPanelList) {

                if (otherAccordionPanel !== currentAccordionPanel) {
                    otherAccordionPanel.classList.remove('shown');
                    otherAccordionPanel.style.maxHeight = null;
                    otherAccordionPanel.previousElementSibling.setAttribute("aria-expanded", false);
                }
            }

            currentAccordionPanel.classList.toggle('shown');

            let expanded = accordionButton.getAttribute("aria-expanded");

            if (expanded == "true") {
                accordionButton.setAttribute("aria-expanded", false);
            } else if (expanded === "false") {
                accordionButton.setAttribute("aria-expanded", true);
            }

            if (currentAccordionPanel.style.maxHeight) {
                currentAccordionPanel.style.maxHeight = null;
            } else {
                currentAccordionPanel.style.maxHeight = currentAccordionPanel.scrollHeight + "px";
            }

        });
    }

    //////////////////////////////////////////////
    // D. Toggle
    //////////////////////////////////////////////

    const collapseButtonList = document.querySelectorAll('[data-toggle="collapse"]');

    for (const collapseButton of collapseButtonList) {

        collapseButton.setAttribute("aria-expanded", false);

        collapseButton.addEventListener('click', () => {

            const collapseTargetID = event.target.getAttribute('data-target');

            const collapseTarget = document.getElementById(collapseTargetID);

           console.log(collapseTargetID);

            // collapseTarget.classList.toggle('shown');
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