import 'element-closest-polyfill';

window.onload = () => {

    //////////////////////////////////////////////
    // A. Dropdowns
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
                    initAccordion(event);
                } else {
                    return;
                }
            });
        }

    }); // end for

    //////////////////////////////////////////////
    // C. Tabs
    //////////////////////////////////////////////

    // const tablist = document.querySelectorAll('[role="tablist"]');
    const tabButtonList = document.querySelectorAll('[role="tab"]');
    const tabPanelList = document.querySelectorAll('[role="tabpanel"]');

    // For easy reference
    const keys = {
        end: 35,
        home: 36,
        left: 37,
        right: 39,
        enter: 13,
        space: 32
    };

    // Add or subtract depending on key pressed
    const direction = {
        37: -1,
        39: 1,
    };

    function addListeners(index) {
        tabButtonList[index].addEventListener('click', clickEventListener);
        tabButtonList[index].addEventListener('keydown', keydownEventListener);
        tabButtonList[index].addEventListener('keyup', keyupEventListener);

        // Build an array with all tabs (<button>s) in it
        tabButtonList[index].index = index;
    };

     for (let i = 0; i < tabButtonList.length; ++i) {
         addListeners(i);
     };

    // When a tab is clicked, activateTab is fired to activate it
    function clickEventListener(event) {
        var tab = event.target;
        activateTab(tab);
    };

    // Handle keydown on tabs
    function keydownEventListener(event) {
        var key = event.keyCode;

        switch (key) {
            case keys.end:
                event.preventDefault();
                // Activate last tab
                focusLastTab();
                break;
            case keys.home:
                event.preventDefault();
                // Activate first tab
                focusFirstTab();
                break;
        };
    };

    // Handle keyup on tabs
    function keyupEventListener(event) {
        var key = event.keyCode;

        switch (key) {
            case keys.left:
            case keys.right:
                switchTabOnArrowPress(event);
                break;
            case keys.enter:
            case keys.space:
                activateTab(event.target);
                break;
        };
    };

    // Either focus the next, previous, first, or last tab
    // depending on key pressed
    
    function switchTabOnArrowPress(event) {
        var pressed = event.keyCode;

        if (direction[pressed]) {
            let target = event.target;

            if (target !== undefined) {
                if (tabButtonList[target.index + direction[pressed]]) {
                    tabButtonList[target.index + direction[pressed]].focus();
                } else if (pressed === keys.left) {
                    focusLastTab();
                } else if (pressed === keys.right) {
                    focusFirstTab();
                };
            };
        };
    };

    // Activates any given tab panel
    function activateTab(tab) {
        
        // Deactivate all other tabs
        deactivateTabs();

        // Set the tab as selected
        tab.setAttribute('aria-selected', 'true');

        // Get the value of aria-controls (which is an ID)
        var controls = tab.getAttribute('aria-controls');

        // Remove hidden attribute from tab panel to make it visible
        document.getElementById(controls).removeAttribute('hidden');
    };

    // Deactivate all tabs and tab panels
    function deactivateTabs() {

        for (const panel of tabPanelList) {
            panel.setAttribute('aria-selected', 'false');
        }

        for (const panel of tabPanelList) {
            panel.setAttribute('hidden', 'hidden');
        }
        
    };

    // Make a guess
    function focusFirstTab() {
        tabButtonList[0].focus();
    };

    // Make a guess
    function focusLastTab() {
        tabButtonList[tabButtonList.length - 1].focus();
    };

    //////////////////////////////////////////////
    // D. Toggle
    //////////////////////////////////////////////

    const collapseButtonList = document.querySelectorAll('[data-toggle="collapse"]');

    for (const collapseButton of collapseButtonList) {

        collapseButton.setAttribute("aria-expanded", false);

        collapseButton.addEventListener('click', (event) => {

            const collapseTargetID = event.target.getAttribute('data-target').replace(/#/, '');

            const collapseTarget = document.getElementById(collapseTargetID);

            collapseTarget.classList.toggle('shown');
        })
    }

    //////////////////////////////////////////////
    // E. Modal
    //////////////////////////////////////////////

    const modalList = document.querySelectorAll('.modal');
    const modalButtonList = document.querySelectorAll('[data-modal-open]');

    const initModal = (modalTarget) => {

        modalTarget.setAttribute("aria-hidden", false);

        // element that was focused before modal opened
        let focusedElementBeforeModal = document.activeElement;

        // add the key listener  
        modalTarget.addEventListener('keydown', processEscapeTabKeys);

        const modalCloseList = modalTarget.querySelectorAll('[data-modal-close]');

        for (const modalClose of modalCloseList) {
            modalClose.addEventListener('click', closeModal);
            modalClose.setAttribute("aria-label", "Close Modal Window");
        }

        // Find all focusable modal elements
        const modalElements = 'input:not([disabled]), button:not([disabled]), a:not([disabled]';
        let focusableElements = modalTarget.querySelectorAll(modalElements);

        // Convert NodeList to Array only for IE 11
        // focusableElements = Array.prototype.slice.call(focusableElements);

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

    for (const modal of modalList) {
        const modalOverlay = modal.querySelector('.modal__overlay');
        const modalContainer = modal.querySelector('.modal__container');

        modalOverlay.setAttribute('tabindex',  '-1');

        modalContainer.setAttribute('role', 'dialog');
        modalContainer.setAttribute('aria-modal', 'true');

        modal.setAttribute("aria-hidden", true);
    }

    for (const modalButton of modalButtonList) {

        modalButton.addEventListener('click', (event) => {

            const modalTargetID = event.target.getAttribute('data-modal-open').replace(/#/, '');
            const modalTarget = document.getElementById(modalTargetID);

            initModal(modalTarget);
        });

    }

    //////////////////////////////////////////////
    // F. Forms
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
    // G. External Links
    //////////////////////////////////////////////

    const externalLinks = document.querySelectorAll('[data-link="external"]');

    for (const link of externalLinks) {
        link.insertAdjacentHTML('beforeend', '<span class="sr-only">Opens a new window</span>');
    }

}; /* window.load */