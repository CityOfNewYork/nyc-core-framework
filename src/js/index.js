import 'element-closest-polyfill';

(function() {

    ////////////////////////////////////////
    // RTL Mutation Observer
    ////////////////////////////////////////

    const rtlTarget = document.querySelector("html");

    const rtlObserver = new MutationObserver((mutations) => {

        mutations.forEach(() => {

            let single_class = "translated-rtl";

            if (rtlTarget.classList.contains(single_class)) {
                rtlTarget.setAttribute("dir", "rtl");
            } else {
                rtlTarget.setAttribute("dir", "ltr");
            }
            
        });
    });

    var rtlConfig = {
        attributes: true,
        attributeFilter: ["class"]
    }

    rtlObserver.observe(rtlTarget, rtlConfig);

    //////////////////////////////////////////////
    // Copyright Year (Footer)
    //////////////////////////////////////////////

    const copyrightYear = document.querySelector(".copyright-year");

    if (copyrightYear){
        let currentYear = new Date().getFullYear();
        copyrightYear.innerHTML = currentYear;
    }

    //////////////////////////////////////////////
    // Dropdowns
    //////////////////////////////////////////////

    const dropdownButtonList = document.querySelectorAll("[data-toggle='dropdown']");

    for (const dropdownButton of dropdownButtonList) {

        let dropdownButtonParent = dropdownButton.closest("li");
        let dropdownMenu = dropdownButton.nextElementSibling;

        dropdownButton.setAttribute("aria-expanded", false);

        dropdownButton.addEventListener("click", function (event) {

            event.preventDefault();

            dropdownMenu.classList.toggle("shown");

            let expanded = dropdownButton.getAttribute("aria-expanded");

            if (expanded == "true") {
                dropdownButton.setAttribute("aria-expanded", false);
                return;
            } else if (expanded === "false") {
                dropdownButton.setAttribute("aria-expanded", true);
                return;
            }
        });

        window.addEventListener("click", function (event) {

            let dropdownButtonClick = dropdownButtonParent.contains(event.target);

            if (!dropdownButtonClick) {
                dropdownMenu.classList.remove("shown");
                dropdownButton.setAttribute("aria-expanded", false);
            }
        });
    }

    //////////////////////////////////////////////
    // Accordion
    //////////////////////////////////////////////

    Array.prototype.slice.call(document.querySelectorAll(".accordion")).forEach((accordion) => {

        const accordionButtonList = accordion.querySelectorAll("[data-toggle='accordion']");
        const accordionPanelList = accordion.querySelectorAll("[data-accordion='panel']");

        function setKeyboardFocusableElements(element = document, focusable = false) {

            const focusElList = element.querySelectorAll("a[href], button, input, textarea, select, details, [tabindex]:not([tabindex=' - 1 '])");

            for (const focusEl of focusElList) {
                if (focusable === true) {
                    focusEl.setAttribute("tabindex", 0);
                } else if (focusable === false) {
                    focusEl.setAttribute("tabindex", -1);
                }
            }
        }

        accordionButtonList.forEach((accordionButton, index) => {

            const currentAccordionPanel = accordionButton.nextElementSibling;
            let isExpanded = accordionButton.getAttribute("aria-expanded");

            accordionButton.setAttribute("tabindex", 0);

            if (isExpanded === "true") {
                currentAccordionPanel.style.maxHeight = currentAccordionPanel.scrollHeight + "px";
                currentAccordionPanel.classList.add("show");

                setKeyboardFocusableElements(currentAccordionPanel, true);

            } else {
                accordionButton.setAttribute("aria-expanded", false);
                currentAccordionPanel.style.maxHeight = null;
                currentAccordionPanel.setAttribute("aria-hidden", true);

                setKeyboardFocusableElements(currentAccordionPanel, false);
            }

            const initAccordion = (event) => {

                event.preventDefault();
                event.stopPropagation();
                
                for (const otherAccordionPanel of accordionPanelList) {

                    otherAccordionPanel.classList.remove("show");
                    
                    if (otherAccordionPanel !== currentAccordionPanel) {
                        otherAccordionPanel.classList.remove("shown");
                        otherAccordionPanel.style.maxHeight = null;
                        otherAccordionPanel.previousElementSibling.setAttribute("aria-expanded", false);
                        otherAccordionPanel.setAttribute("aria-hidden", true);

                        setKeyboardFocusableElements(otherAccordionPanel, false);
                    }
                }

                currentAccordionPanel.classList.toggle("shown");

                isExpanded = accordionButton.getAttribute("aria-expanded");
                
                if (isExpanded === "true") {
                    accordionButton.setAttribute("aria-expanded", false);
                    currentAccordionPanel.setAttribute("aria-hidden", true);
                    
                    setKeyboardFocusableElements(currentAccordionPanel, false);

                } else if (isExpanded === "false") {
                    accordionButton.setAttribute("aria-expanded", true);
                    currentAccordionPanel.setAttribute("aria-hidden", false);

                    setKeyboardFocusableElements(currentAccordionPanel, true);
                }

                if (currentAccordionPanel.style.maxHeight) {
                    currentAccordionPanel.style.maxHeight = null;
                } else {
                    currentAccordionPanel.style.maxHeight = currentAccordionPanel.scrollHeight + "px";
                    currentAccordionPanel.setAttribute("aria-hidden", false);
                }

                let accTrigger = new Event("accTrigger", { bubbles: true });
                document.dispatchEvent(accTrigger);

            }

            accordionButton.addEventListener("click", (event) => {
                initAccordion(event);
            });

            accordionButton.addEventListener("keydown", (event) => {

                const directionalFocus = (dir) => {
                    event.preventDefault();

                    let targetFocus = index + dir;

                    if (dir === -1 && targetFocus < 0) {
                        accordionButtonList[accordionButtonList.length -1].focus();
                    } else if (dir === 1 && targetFocus >= accordionButtonList.length) {
                        accordionButtonList[0].focus();
                    } else {
                        accordionButtonList[targetFocus].focus();
                    }
                }

                const key = event.keyCode;

                const keyCodes = {
                    arrowUp: 38,
                    arrowDown: 40
                };

                switch (key) {
                    case keyCodes.arrowUp:
                        directionalFocus(-1);
                        break;
                    case keyCodes.arrowDown:
                        directionalFocus(1);
                        break;
                }

            });

            accordionButton.addEventListener("keyup", (event) => {
                if (event.keyCode === 13 && event.target.tagName !== "BUTTON") {
                    initAccordion(event);
                }
            });

        });

    }); // end for

    //////////////////////////////////////////////
    // Tabs
    //////////////////////////////////////////////

    Array.prototype.slice.call(document.querySelectorAll(".tabs")).forEach((tab) => {

        const tabsButtonList = tab.querySelectorAll("[role='tab']");
        const tabsPanelList = tab.querySelectorAll("[role='tabpanel']");

        tabsButtonList.forEach((tabsButton, index) => {

            const activateTab = (tab) => {
            
                // Deactivate all other tabs
                deactivateTabs();

                // Set the tab as selected
                tab.setAttribute("aria-selected", "true");

                // Get the value of aria-controls (which is an ID)
                let controls = tab.getAttribute("aria-controls");

                let currentTabPanel = document.getElementById(controls);

                currentTabPanel.classList.add("shown");
                currentTabPanel.removeAttribute("hidden");

            }

            const deactivateTabs = () => {

                for (const tab of tabsButtonList) {
                    tab.setAttribute("aria-selected", "false");
                }

                for (const panel of tabsPanelList) {
                    panel.classList.remove("shown");
                    panel.setAttribute("hidden", "");
                }
                
            };

            tabsButton.addEventListener("click", (event) => {
                let tab = event.target;
                activateTab(tab);
            });

            tabsButton.addEventListener("keydown", (event) => {

                const directionalFocus = (dir) => {
                    event.preventDefault();

                    let targetFocus = index + dir;

                    if (dir === -1 && targetFocus < 0) {
                        tabsButtonList[tabsButtonList.length - 1].focus();
                    } else if (dir === 1 && targetFocus >= tabsButtonList.length) {
                        tabsButtonList[0].focus();
                    } else {
                        tabsButtonList[targetFocus].focus();
                    }
                }

                const keyCodes = {
                    arrowLeft: 37,
                    arrowRight: 39
                };
                
                const key = event.keyCode;

                switch (key) {
                    case keyCodes.arrowLeft:
                        directionalFocus(-1);
                        break;
                    case keyCodes.arrowRight:
                        directionalFocus(1);
                        break;
                }

            });

        });

    }); // end for

    //////////////////////////////////////////////
    // Toggle
    //////////////////////////////////////////////

    const collapseButtonList = document.querySelectorAll("[data-toggle='collapse']");

    for (const collapseButton of collapseButtonList) {

        collapseButton.setAttribute("aria-expanded", false);

        collapseButton.addEventListener("click", (event) => {

            const collapseTargetID = event.target.getAttribute("data-target").replace(/#/, "");

            const collapseTarget = document.getElementById(collapseTargetID);

            collapseTarget.classList.toggle("shown");
        })
    }

    //////////////////////////////////////////////
    // Modal
    //////////////////////////////////////////////

    const modalList = document.querySelectorAll(".modal");
    const modalButtonList = document.querySelectorAll("[data-modal-open]");

    const initModal = (modalTarget) => {

        modalTarget.setAttribute("aria-hidden", false);

        // element that was focused before modal opened
        let focusedElementBeforeModal = document.activeElement;

        // add the key listener  
        modalTarget.addEventListener("keydown", processEscapeTabKeys);

        const modalCloseList = modalTarget.querySelectorAll("[data-modal-close]");

        for (const modalClose of modalCloseList) {
            modalClose.addEventListener("click", closeModal);
            modalClose.setAttribute("aria-label", "Close Modal Window");
        }

        // Find all focusable modal elements
        const modalElements = "input:not([disabled]), button:not([disabled]), a:not([disabled]";
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
        // const modalOverlay = modal.querySelector(".modal__overlay");
        const modalContainer = modal.querySelector(".modal__content");

        // modalOverlay.setAttribute("tabindex",  "-1");

        modalContainer.setAttribute("role", "dialog");
        modalContainer.setAttribute("aria-modal", "true");

        modal.setAttribute("aria-hidden", true);
    }

    for (const modalButton of modalButtonList) {

        modalButton.addEventListener("click", (event) => {

            const modalTargetID = event.target.getAttribute("data-modal-open").replace(/#/, "");
            const modalTarget = document.getElementById(modalTargetID);

            initModal(modalTarget);
        });

    }

    //////////////////////////////////////////////
    // Table Breakpoints
    //////////////////////////////////////////////

    Array.prototype.slice.call(document.querySelectorAll("[class*='table--stack']")).forEach((table) => {
        
        const tableHeaderList = table.querySelectorAll("thead th");
        const tableRowList = table.querySelectorAll("tbody tr");

        let myHeaders = [];

        tableHeaderList.forEach((tableHeader) => {

            if (tableHeader.textContent !== "") {
                let myTitle = tableHeader.textContent.trim();
                myHeaders.push(myTitle);
            }

        });
        
        tableRowList.forEach((tableRow) => {

            const tableDataList = tableRow.querySelectorAll("td");

            tableDataList.forEach((tableData, index) => {

                let tableDataHTML = tableData.innerHTML;

                let myNewStuff =
                   `<div class="td-content">
                        ${tableDataHTML}
                    </div>`;

                tableData.innerHTML = myNewStuff;
                tableData.setAttribute("data-before", myHeaders[index]);

            });

        });

    }); // end for

    //////////////////////////////////////////////
    // Table Scrolling
    //////////////////////////////////////////////

    const initTableScroll = () => {

        const scrollElementList = document.querySelectorAll(".table-scroll");

        for (const scrollElement of scrollElementList) {

            let scrollTarget = scrollElement.querySelector(".table-scroll__container");

            let maxWidth = scrollElement.offsetWidth;
            let scrollWidth = scrollTarget.scrollWidth;

            if (scrollWidth > maxWidth) {
                scrollElement.setAttribute("data-scroll", true);
            } else {
                scrollElement.setAttribute("data-scroll", false);
            }

            function removeGradient() {

                let scrollPos = scrollTarget.scrollLeft;

                console.log(scrollTarget.scrollLeft);

                if (scrollPos > 1) {
                    scrollTarget.setAttribute("data-scrolling", true);
                } else {
                    scrollTarget.setAttribute("data-scrolling", false);
                    return;
                }

            }

            scrollTarget.addEventListener("scroll", removeGradient), {
                passive: true
            };

        }

    }

    initTableScroll();
    window.addEventListener("resize", initTableScroll);

    //////////////////////////////////////////////
    // Forms
    //////////////////////////////////////////////

    const formEntryFieldList = document.querySelectorAll(".form-entry__field");

    formEntryFieldList.forEach((formEntryField) => {

        let entryInput = formEntryField.querySelector(".form-entry__field__input");
        let entryButtonList = formEntryField.querySelectorAll("button");

        entryInput.addEventListener("focus", focusIn);
        entryInput.addEventListener("blur", focusOut);

        entryButtonList.forEach((entryButton) => {
            entryButton.addEventListener("focusin", focusIn);
            entryButton.addEventListener("active", focusIn);
            entryButton.addEventListener("focusout", focusOut);
        });

        // window.addEventListener("click", function (event) {

        //     let coolClick = formEntryField.contains(event.target);

        //     if (!coolClick) {
        //         focusOut();
        //     }
        // });

        formEntryField.addEventListener("click", (event) => {

            entryInput.focus();

        });

        // console.log("entryInput ===> ", entryInput);

        entryInput.addEventListener("change", () => {
            
            if (entryInput.value != "") {
                entryInput.closest(".form-entry").classList.add("has-value");
            } else {
                entryInput.closest(".form-entry").classList.remove("has-value");
            }

        });

        function focusIn() {
            this.closest(".form-entry").classList.add("active");
            console.warn("I'm in!");
        }

        function focusOut() {
            this.closest(".form-entry").classList.remove("active");
            console.warn("I'm out!");
        }

        // if (fieldInput.checked) {
        //     fieldInput.classList.add("checked");
        // } else if (!fieldInput.checked) {
        //     fieldInput.classList.remove("checked");
        // }

        // if (wasValidated === true) {
        //     if (fieldInput.hasAttribute("required")) {
        //         checkIfEmpty(fieldInput);
        //     }
        // }
    
    });

    let wasValidated = false;

    Array.prototype.slice.call(document.querySelectorAll("form")).forEach((form) => {

        // Handle Form Submission

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            wasValidated = true;

            let formErrorsList = form.querySelectorAll(":invalid");

            for (const formError of formErrorsList) {
                checkIfEmpty(formError);
            }

            let firstError = document.querySelector("[class*='alert']");

            if (firstError.hasAttribute("data-alert")) {
                firstError.style.display = "block";
            }

            let myScroll = firstError.offsetTop - 16 + "px";

            window.scrollTo({
                top: myScroll,
                behavior: "smooth"
            });

        });

        function checkIfEmpty(field) {
            if (isEmpty(field.value.trim())) {
                // Set field invalid
                setInvalid(field);
                return true;
            } else {
                // Set field valid
                setValid(field);
                return false;
            }
        }

        function isEmpty(value = null) {
            if (value === "") return true;
            return false;
        }

        const invalidClasses = ["invalid", "alert--warn"];

        function setInvalid(field) {
            let myEl = field.closest(".form-entry");
            myEl.classList.add(...invalidClasses);
        }

        function setValid(field) {
            let myEl = field.closest(".form-entry");
            myEl.classList.remove(...invalidClasses);
        }
        
    });

    // Input Number Spinner

    const numberInputList = document.querySelectorAll(".form-entry--number");

    numberInputList.forEach((numberInput) => {

        const spinnerInput = numberInput.querySelector("input[type='number']");
        const btnAdd = numberInput.querySelector("[data-type='add']");
        const btnSubtract = numberInput.querySelector("[data-type='subtract']");

        var minLimit, maxLimit, step;

        function init() {

            minLimit = makeNumber(getAttribute(spinnerInput, 'min')) || 0,
                maxLimit = makeNumber(getAttribute(spinnerInput, 'max')) || 9000,
                step = makeNumber(getAttribute(spinnerInput, 'step') || '1');

            btnSubtract.addEventListener('click', changeSpinner, false);
            btnAdd.addEventListener('click', changeSpinner, false);
            btnSubtract.addEventListener('keyup', keySpinner, false);
            btnAdd.addEventListener('keyup', keySpinner, false);

            if (supportsTouch()) {
                btnSubtract.addEventListener('touchend', removeClickDelay, false);
                btnAdd.addEventListener('touchend', removeClickDelay, false);
            }

            if (supportsPointer()) {
                btnSubtract.addEventListener('pointerup', removeClickDelay, false);
                btnAdd.addEventListener('pointerup', removeClickDelay, false);
            }
        }

        function removeClickDelay(e) {
            e.preventDefault();
            e.target.click();
        }

        function makeNumber(inputString) {
            return parseInt(inputString, 10);
        }

        function update(direction) {
            var num = makeNumber(spinnerInput.value);
            if (direction === 'add') {
                console.log("neat");
                spinnerInput.value = ((num + step) <= maxLimit) ? (num + step) : spinnerInput.value;
            } else if (direction === 'subtract') {
                spinnerInput.value = ((num - step) >= minLimit) ? (num - step) : spinnerInput.value;
            }
        }

        function getAttribute(el, attr) {
            var hasGetAttr = (el.getAttribute && el.getAttribute(attr)) || null;
            if (!hasGetAttr) {
                var attrs = el.attributes;
                for (var i = 0, len = attrs.length; i < len; i++) {
                    if (attrs[i].nodeName === attr) {
                        hasGetAttr = attrs[i].nodeValue;
                    }
                }
            }
            return hasGetAttr;
        }

        /* Touch and Pointer support */
        function supportsTouch() {
            return ('ontouchstart' in window);
        }

        function supportsPointer() {
            return ('pointerdown' in window);
        }

        /* Keyboard support */
        function keySpinner(e) {
            switch (e.keyCode) {
                case 40:
                case 37: // Down, Left
                    update('subtract');
                    btnSubtract.focus();
                    break;
                case 38:
                case 39:
                    // Top, Right
                    update('add');
                    btnAdd.focus();
                    break;
            }
        }

        function changeSpinner(e) {
            e.preventDefault();
            var increment = getAttribute(e.target, 'data-type');
            update(increment);
        }

        init();

    });

    //////////////////////////////////////////////
    // External Links
    //////////////////////////////////////////////

    const externalLinks = document.querySelectorAll("[data-link='external']");

    for (const link of externalLinks) {
        link.insertAdjacentHTML("beforeend", "<span class='screen-reader-only'>Opens a new window</span>");
    }

    //////////////////////////////////////////////
    // Focusable Buttons
    //////////////////////////////////////////////

    const focusableButtonList = document.querySelectorAll("[role='tab'], [data-toggle='accordion'], a[href], button");

    for (const button of focusableButtonList) {

        let mouseDown = false;

        button.addEventListener("mousedown", () => {
            mouseDown = true;
        });

        button.addEventListener("mouseup", () => {
            mouseDown = false;
        });

        button.addEventListener("focus", (event) => {
            if (mouseDown) {
                event.target.blur();
            }
        });
    }

    //////////////////////////////////////////////
    // Aria Current
    //////////////////////////////////////////////

    const currentLinkList = document.querySelectorAll("a[aria-current]");

    currentLinkList.forEach((currentLink) => {
        currentLink.closest("li").classList.add("active");
    });

    //////////////////////////////////////////////
    // Backdrop I.E.
    //////////////////////////////////////////////

    var isIE11 = !!(navigator.userAgent.match(/Trident/) && !navigator.userAgent.match(/MSIE/));

    if(isIE11){

        const backdropList = document.querySelectorAll(".backdrop--fixed");

        for (const backdrop of backdropList) {

            let backdropHeight = backdrop.scrollHeight;
            let backdropCoverHeight = backdrop.querySelector(".backdrop__cover").scrollHeight;

            if (backdropCoverHeight < backdropHeight) {
                backdrop.style.height = backdropHeight + "px";
            }

        }
    }

})();