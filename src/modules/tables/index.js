import "./_style.scss";

//////////////////////////////////////////////
// Table
//////////////////////////////////////////////

export default class Tables {

    constructor() {

        // Table Breakpoints

        const tableStackList = document.querySelectorAll("[class*='table--stack']");

        tableStackList.forEach((tableStack) => {

            const tableHeaderList = tableStack.querySelectorAll("thead th");
            const tableRowList = tableStack.querySelectorAll("tbody tr");

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

                    let myNewContent =
                        `<div class="td-content">
                        ${tableDataHTML}
                        </div>`;

                    tableData.innerHTML = myNewContent;
                    tableData.setAttribute("data-before", myHeaders[index]);

                });

            });

        });

        // Table Scrolling

        const tableScrollList = document.querySelectorAll(".table-scroll");

        const initTableScroll = () => {

            tableScrollList.forEach((scrollElement) => {

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

                    if (scrollPos > 1) {
                        scrollTarget.setAttribute("data-scrolling", true);
                    } else {
                        scrollTarget.setAttribute("data-scrolling", false);
                    }

                }

                scrollTarget.addEventListener("scroll", removeGradient, {
                    passive: true
                });

            });
        }
    
        initTableScroll();
        window.addEventListener("resize", initTableScroll);

    }
}