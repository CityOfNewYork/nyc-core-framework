const coreIconsData = "https://i.icomoon.io/public/395bc97f45/NYCCoreIcons/selection-svg.json";

const coreIconsGridView = document.getElementById("coreIconsGrid");
const coreIconsListView = document.getElementById("coreIconsList");

let coreIconsArray = [];

const loadCoreIcons = async () => {
    try {
        const response = await fetch(coreIconsData);
        const coreIconData = await response.json();

        coreIconsArray = coreIconData.icons;

        displayIcons(coreIconsArray);

    } catch (err) {
        //console.error(err);
    }
};

let currentView = "Grid";

const displayIcons = (icons) => {

    
    const iconGridHTML = icons.map((iconArray) => {

        let name = iconArray.properties.name;
        let tags = iconArray.icon.tags;

        return `
        <div class="grid__cell">
            <div class="aspect-ratio aspect-ratio--1by1 border margin-bottom-1">
                <div class="aspect-ratio__content display-flex justify-content-center align-items-center">
                    <span class="nyc_icon_${name}" style="font-size: 2em !important;"></span>   
                </div>
            </div>
            <p class="font-size-sm">
                    ${name}
                </p>
        </div>`;

    }).join('');

    const iconListHTML = icons.map((iconArray) => {

        let name = iconArray.properties.name;
        let tags = iconArray.icon.tags;

        return `
        <div class="grid__cell display-flex theme-dark rounded">
            
            <div class="width-25">
                <div class="aspect-ratio aspect-ratio--3by2 border-right box-shadow-2">
                    <div class="aspect-ratio__content display-flex justify-content-center align-items-center">
                        <span class="nyc_icon_${name}" style="font-size: 2em !important;"></span>   
                    </div>
                </div>
            </div>

            <div class=" flex-fill">
                <pre>
                    <code class="language-html">
                        &lt;span class="nyc_icon_${name}"&gt;&lt;/span&gt;
                    </code>
                </pre>
            </div>
            
        </div>`;

    }).join('');

    coreIconsGrid.innerHTML = iconGridHTML;
    coreIconsList.innerHTML = iconListHTML;

    console.log("I AM ICONS JS!");

};

loadCoreIcons();
// Toggle

const searchBar = document.getElementById('core-icon-search');

searchBar.addEventListener('keyup', (event) => {
    const searchString = event.target.value.toLowerCase();
    const filteredIcons = coreIconsArray.filter((iconArray) => {
        return (
            iconArray.properties.name.toLowerCase().includes(searchString) ||
            iconArray.icon.tags.toString().includes(searchString)
        );
    });

    displayIcons(filteredIcons);

});