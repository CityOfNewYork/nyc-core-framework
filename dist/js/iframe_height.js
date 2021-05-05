document.addEventListener("DOMContentLoaded", function () {

    const iframeList = document.getElementsByTagName("iframe");

    for (const iframe of iframeList) {

        const iframeWindow = iframe.contentWindow;

        const getIframeDocHeight = () => {

            let iframeWindowHeight = iframeWindow.document.body.offsetHeight;

console.log(iframeWindowHeight)

            iframe.style.height = iframeWindowHeight + 'px';
        }


        // setTimeout(function(){ getIframeDocHeight() }, 800);
        window.addEventListener('resize', getIframeDocHeight);


    }

});