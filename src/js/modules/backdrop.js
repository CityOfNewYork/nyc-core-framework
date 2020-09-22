//////////////////////////////////////////////
// Backdrop
//////////////////////////////////////////////

class Backdrop {

    constructor() {

        var isIE11 = !!(navigator.userAgent.match(/Trident/) && !navigator.userAgent.match(/MSIE/));

        if (isIE11) {

            const backdropList = document.querySelectorAll(".backdrop--fixed");

            for (const backdrop of backdropList) {

                let backdropHeight = backdrop.scrollHeight;
                let backdropCoverHeight = backdrop.querySelector(".backdrop__cover").scrollHeight;

                if (backdropCoverHeight < backdropHeight) {
                    backdrop.style.height = backdropHeight + "px";
                }

            }
        }
    }
}

export default Backdrop;