
window.onload = () => {

    //////////////////////////////////////////////
    // A. CSS Grid
    //////////////////////////////////////////////

    // var gridCellList = document.querySelectorAll('main[data-grid] > *');

    // for (const gridCell of gridCellList) {

    //     // cell.classList.remove('cell');
    //     // cell.classList.add('h-100');

    //     // cell.data-grid__cell

    //     let dataGridAttribute = gridCell.getAttribute("data-grid");

    //     gridCell.removeAttribute("data-grid");

    //     // create wrapper container
    //     const grid_cell_wrapper = document.createElement('div');
    //     grid_cell_wrapper.classList.add('data-grid__cell');

    //     grid_cell_wrapper.setAttribute("data-grid", dataGridAttribute);

    //     // insert grid_cell_wrapper before el in the DOM tree
    //     gridCell.parentNode.insertBefore(grid_cell_wrapper, gridCell);

    //     // move el into grid_cell_wrapper
    //     grid_cell_wrapper.appendChild(gridCell);
    // }


    //////////////////////////////////////////////
    // B. Backdrops
    //////////////////////////////////////////////

    var backdropFixedList = document.querySelectorAll('.backdrop--fixed');

    for (const backdrop of backdropFixedList) {

        let backdropContent = backdrop.querySelector('.backdrop__cover');
        let backdropContentHeight = backdropContent.scrollHeight + "px";

        let backdropImage = backdrop.querySelector('.backdrop__image');
        let backdropImageSrc = backdropImage.src;
        let backdropImageClassList = backdropImage.classList;

        // // Create Image Placeholder
        const backdropImagePlaceholder = document.createElement('div');

        backdrop.insertBefore(backdropImagePlaceholder, backdropImage);

        for (const myClass of backdropImageClassList) {
                backdropImagePlaceholder.classList.add(myClass);
            if (myClass != 'backdrop__image'){
            }
        }

        // console.log(backdropImageClassList);
        backdropImagePlaceholder.style.backgroundImage = "url(" + backdropImageSrc + ")";

        backdropImage.style.display = "none";


        if ( backdrop.parentNode.classList.contains('h-100') ) {
            backdrop.style.height = "100%";
        } else {
            backdrop.style.height = backdropContentHeight;
        }
            

    }

};
