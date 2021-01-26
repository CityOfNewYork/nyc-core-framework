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
        console.error(err);
    }
};

let currentView = "Grid";

const displayIcons = (icons) => {

    const iconGridHTML = icons.map((iconArray) => {

        let name = iconArray.properties.name;
        let tags = iconArray.icon.tags;

        return `
        <div class="grid__cell">

            <div class="aspect-ratio aspect-ratio--1by1 theme-light margin-bottom-1">
                <div class="aspect-ratio__content display-flex justify-content-center align-items-center">
                    <span class="nyc_icon_${name}" style="font-size: 2em !important;"></span>   
                </div>
            </div>
        
            <p class="font-size-sm">
                ${name}
            </p>

        </div>`;

    }).join('');

    const iconListHTML = icons.map((iconArray, index) => {

        let name = iconArray.properties.name;
        let tags = iconArray.icon.tags;

        let htmlSpan = `
            <span class="token tag">
                <span class="token tag"><span class="token punctuation">&lt;</span>span </span>
                <span class="token attr-name">class</span>
                <span class="token attr-value">
                    <span class="token punctuation attr-equals">=</span>
                    <span class="token punctuation">"</span>
                    nyc_icon_${name}
                    <span class="token punctuation">" </span>
                </span>
                <span class="token attr-name">aria-hidden</span>
                <span class="token attr-value">
                    <span class="token punctuation attr-equals">=</span>
                    <span class="token punctuation">"</span>
                    true
                    <span class="token punctuation">"</span>
                </span>
                <span class="token punctuation">&gt;</span>
            </span>
            <span class="token tag">
                <span class="token tag">
                    <span class="token punctuation">&lt;/</span>span
                </span>
                <span class="token punctuation">&gt;</span>
            </span>`;

        return `           
            <div class="display-flex align-items-stretch theme-dark border-top">

                <div class="display-flex width-25 border-right padding-2">
                    <div class="margin-y-auto text-align-center width-100">
                        <span class="nyc_icon_${name} display-inline-block" style="font-size: 1.5em !important;"></span>
                    </div>
                </div>

                <div class="width-75 padding-3">
                    <p class="font-size-md margin-bottom-1">
                        Class: ${name}
                    </p>
                    <p class="font-size-sm opacity-80 margin-bottom-1">
                        Tags: ${tags.map((cool) => cool.replace(',', '')).join(', ')}</p>
                    <div class="font-size-md">
                        ${htmlSpan.split('\n').map((s) => s.trim()).join('')}
                    </div>
                </div>

            </div>`;

    }).join('');

    coreIconsGrid.innerHTML = iconGridHTML;
    coreIconsList.innerHTML = iconListHTML;

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