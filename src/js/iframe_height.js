document.addEventListener("DOMContentLoaded", function () {

    const iframeList = document.getElementsByTagName("iframe");

    for (const iframe of iframeList) {

        const iframeWindow = iframe.contentWindow;

        const getIframeDocHeight = () => {

            let iframeWindowHeight = iframeWindow.document.body.scrollHeight;
            iframe.style.height = iframeWindowHeight + 'px';
        }

        iframe.addEventListener('load', getIframeDocHeight);
        window.addEventListener('resize', getIframeDocHeight);

    }

});