////////////////////////////////////////
// Homepage Banner Height
////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {

    const headerHeight = document.getElementById('global-header').offsetHeight;
    const bannerTarget = document.getElementById('introduction');

    const setBannerHeight = () => {

        const windowHeight = window.innerHeight;

        bannerTarget.style.height = (windowHeight - headerHeight) + 'px';

    }

    setBannerHeight();
    window.addEventListener('resize', setBannerHeight);

});