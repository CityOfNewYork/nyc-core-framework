import "./_style.scss";

//////////////////////////////////////////////
// Accordion
//////////////////////////////////////////////

export default class Tabs {

    constructor() {

        const tabsList = document.querySelectorAll(".tabs");

        //////////////////////////////////////////////
        // Tabs
        //////////////////////////////////////////////

        tabsList.forEach((tab) => {

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

        });
    
    }
}