////////////////////////////////////////
// Homepage Banner Height
////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {

    const headerHeight = document.getElementById('global-header').offsetHeight;

    const bannerTarget = document.getElementById('introduction');

    setBannerHeight = () => {

        const windowHeight = window.innerHeight;

        bannerTarget.style.height = (windowHeight - headerHeight) + 'px'

    }

    setBannerHeight();
    window.addEventListener('resize', setBannerHeight);

});