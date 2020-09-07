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

    const fieldInputList = document.querySelectorAll(".form__entry__field__input");
    
    let wasValidated = false;

    fieldInputList.forEach((fieldInput) => {

        fieldInput.addEventListener("change", () => {
            
            console.log("Value", fieldInput.value);

            if (fieldInput.value != "") {
                fieldInput.closest(".form__entry__field, .form__entry__field--has-btn").classList.add("has-value");
            } else {
                fieldInput.closest(".form__entry__field, .form__entry__field--has-btn").classList.remove("has-value");
            }

        });

        if (fieldInput.checked) {
            fieldInput.classList.add("checked");
        } else if (!fieldInput.checked) {
            fieldInput.classList.remove("checked");
        }

        if (wasValidated === true) {
            if (fieldInput.hasAttribute("required")) {
                checkIfEmpty(fieldInput);
            }
        }
    
    });

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
            let myEl = field.closest(".form__entry");
            myEl.classList.add(...invalidClasses);
        }

        function setValid(field) {
            let myEl = field.closest(".form__entry");
            myEl.classList.remove(...invalidClasses);
        }
        
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