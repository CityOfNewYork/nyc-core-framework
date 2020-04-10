
window.onload = () => {

    //////////////////////////////////////////////
    // A. CSS Grid
    //////////////////////////////////////////////

    // element that will be wrapped
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

};
