
const docPagesData = "{{ site.baseurl }}/lib/json/documentation-pages.json";

let allPagesArray = [];

const loadDocPagesData = async () => {
    try {
        const response = await fetch(docPagesData);
        const docPages = await response.json();

        const docPagesObject = docPages.docs;

        docPagesObject.forEach((category) => {
            const collectionName = category.collection;
            const collectionPages = category.pages;

            if(collectionPages.length) {
                collectionPages.forEach((page) => {
                    allPagesArray.push(page);
                });
            }

            // allPagesArray.forEach((page) => {
            //     let myTitle = page.title;
            //     let myTags = page.tags;
            //     let myURL = page.url;
                
            //     console.log(`
            //         Page = ${myTitle}, 
            //         Url = ${myTags}
            //         Url = ${myURL}
            //     `);
            
            // });

        });

    } catch (err) {
        console.error(err);
    }
};

const searchDocs = document.getElementById('search-docs-input');

const searchResultDisplay = document.getElementById('search-docs-results');

searchDocs.addEventListener('keyup', (event) => {

    const searchQuery = event.target.value.toLowerCase();

        let searched = allPagesArray.filter((searchResults) => {
        return (
            searchResults.title.toLowerCase().includes(searchQuery) ||
            searchResults.tags.toString().toLowerCase().includes(searchQuery)
        );
    });

    if(searchQuery === ""){
        searchResultDisplay.classList.add("display-none");
    } else {
        searchResultDisplay.classList.remove("display-none");
        printResults(searched);
    }

});

function printResults(pages) {
    
    searchResultDisplay.innerHTML = "";

    pages.forEach((result) => {

        let myTitle = result.title;
        let myURL = result.url;

        const resultHTML =`
            <li>${myTitle}</li>
        `;
        
        searchResultDisplay.insertAdjacentHTML('beforeend', resultHTML)
    
    });

}

loadDocPagesData();