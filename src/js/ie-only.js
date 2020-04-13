
window.onload = () => {

    //////////////////////////////////////////////
    // A. CSS Grid
    //////////////////////////////////////////////

    var itemList = document.querySelectorAll('.item');

    for (const item of itemList) {

        item.classList.remove('item');
        item.classList.add('h-100');

        // create wrapper container
        const grid_cell_wrapper = document.createElement('div');
        grid_cell_wrapper.classList.add('item');

        // insert grid_cell_wrapper before el in the DOM tree
        item.parentNode.insertBefore(grid_cell_wrapper, item);

        // move el into grid_cell_wrapper
        grid_cell_wrapper.appendChild(item);
    }


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
