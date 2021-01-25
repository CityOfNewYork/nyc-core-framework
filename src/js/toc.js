const sectionStartList = document.querySelectorAll("hr.section-start");
const toc = document.querySelector("#table-of-contents");

if (toc) {

    const tocUL = document.createElement("ul");

    tocUL.classList.add("nav", "font-size-md");

    toc.appendChild(tocUL);

    sectionStartList.forEach((sectionStart) => {

        const sectionID = sectionStart.getAttribute("id");
        const sectionTitle = sectionStart.nextElementSibling.querySelector("h2").innerText;

        const sectionLinkHTML =
            `<li>
                <a href="#${sectionID}">${sectionTitle}</a>
            </li>`;

            tocUL.insertAdjacentHTML('beforeend', sectionLinkHTML)

    });
}