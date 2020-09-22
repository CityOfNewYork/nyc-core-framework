//////////////////////////////////////////////
// Table
//////////////////////////////////////////////

class Table {

    constructor() {

        // Table Breakpoints

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

        // Table Scrolling

        const initTableScroll = () => {

            const scrollElementList = document.querySelectorAll(".table-scroll");

            scrollElementList.forEach((scrollElement) => {

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
            });
        }

        initTableScroll();
        window.addEventListener("resize", initTableScroll);

    }
}

export default Table;