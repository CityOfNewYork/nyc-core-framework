import 'element-closest-polyfill';

window.onload = () => {

    ////////////////////////////////////////
    // RTL Mutation Observer
    ////////////////////////////////////////

    console.log("::::::::::::: TESTING LOADING AGAIN :::::::::::::");

    const rtlTarget = document.querySelector("html");

    const rtlObserver = new MutationObserver((mutations) => {

        mutations.forEach(() => {

            let single_class = "translated-rtl";

            if ( rtlTarget.classList.contains(single_class) ) {
                rtlTarget.setAttribute("dir", "rtl");
            } else {
                rtlTarget.setAttribute("dir", "ltr");
            }
            
        });
    });

    var config = {
        attributes: true,
        attributeFilter: ["class"]
    }

    rtlObserver.observe(rtlTarget, config);

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

        const accButtonList = accordion.querySelectorAll("[data-toggle='accordion']");
        const accPanelList = accordion.querySelectorAll("[data-accordion='panel']");

        function setKeyboardFocusableElements(element = document, focusable = false) {

            const focusElList = element.querySelectorAll("a, button, input, textarea, select, details, [tabindex]:not([tabindex=' - 1 '])");

            for (const focusEl of focusElList) {

                if (focusable === true) {
                    // focusEl.style.background = "blue";
                    focusEl.setAttribute("tabindex", 0);
                } else if (focusable === false) {
                    // focusEl.style.background = "red";
                    focusEl.setAttribute("tabindex", -1);
                }
            }
        }

        for (const accordionButton of accButtonList) {

            accordionButton.setAttribute("tabindex", 0);
            
            let currentAccordionPanel = accordionButton.nextElementSibling;
            let expanded = accordionButton.getAttribute("aria-expanded");

            if (expanded === "true") {
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

                event.stopPropagation();
                event.preventDefault();
                
                for (const otherAccordionPanel of accPanelList) {

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

                let expanded = accordionButton.getAttribute("aria-expanded");
                
                if (expanded === "true") {
                    accordionButton.setAttribute("aria-expanded", false);
                    currentAccordionPanel.setAttribute("aria-hidden", true);
                    
                    setKeyboardFocusableElements(currentAccordionPanel, false);

                } else if (expanded === "false") {
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

                let accTrigger = new Event("accTrigger",{ bubbles: true });
                document.dispatchEvent(accTrigger);

            }

            accordionButton.addEventListener("click", (event) => {
                initAccordion(event);
            });

            accordionButton.addEventListener("keyup", (event) => {
                if (event.keyCode === 13 && event.target.tagName !== "BUTTON") {
                    initAccordion(event);
                } else {
                    return;
                }
            });
        }

    }); // end for

    //////////////////////////////////////////////
    // Tabs
    //////////////////////////////////////////////

    Array.prototype.slice.call(document.querySelectorAll(".tabs")).forEach((tab) => {

        const tabButtonList = tab.querySelectorAll("[role='tab']");
        const tabPanelList = tab.querySelectorAll("[role='tabpanel']");

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
            tabButtonList[index].addEventListener("click", clickEventListener);
            tabButtonList[index].addEventListener("keydown", keydownEventListener);
            tabButtonList[index].addEventListener("keyup", keyupEventListener);

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
                    event.target.blur();
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
            tab.setAttribute("aria-selected", "true");

            // Get the value of aria-controls (which is an ID)
            let controls = tab.getAttribute("aria-controls");

            let currentTabPanel = document.getElementById(controls);

            currentTabPanel.classList.add("shown");
            currentTabPanel.removeAttribute("hidden");

        };

        // Deactivate all tabs and tab panels
        function deactivateTabs() {

            for (const tab of tabButtonList) {
                tab.setAttribute("aria-selected", "false");
            }

            for (const panel of tabPanelList) {
                panel.classList.remove("shown");
                panel.setAttribute("hidden", "");
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

                let myStuff = tableData.innerHTML;

                let myNewStuff =
                   `<div class="td-content">
                        ${myStuff}
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

    Array.prototype.slice.call(document.querySelectorAll("form")).forEach((form) => {

        const fieldInputList = form.querySelectorAll(".form-entry__field__input");

        let wasValidated = false;

        for (const fieldInput of fieldInputList) {

            fieldInput.addEventListener("change", () => {

                if (fieldInput.value.length != 0) {
                    fieldInput.closest(".form-entry__field, .form-entry__field--has-btn").classList.add("has-value");
                } else {
                    fieldInput.closest(".form-entry__field, .form-entry__field--has-btn").classList.remove("has-value");
                }

                if(fieldInput.checked){ 
                    fieldInput.classList.add("checked");
                } else if (!fieldInput.checked){
                    fieldInput.classList.remove("checked");
                }

                if(wasValidated === true){
                    if (fieldInput.hasAttribute("required")){
                        checkIfEmpty(fieldInput);
                    }
                } 

            });

        }

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

    // Backdrop I.E. 

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

}; /* window.load */