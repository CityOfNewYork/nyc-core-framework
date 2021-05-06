document.addEventListener("DOMContentLoaded", () => {

    const iframeList = document.getElementsByTagName("iframe");

    for (const iframe of iframeList) {

        const getIframeDocHeight = () => {

            let iframeWindowHeight = iframe.contentWindow.document.body.offsetHeight;

            iframe.style.height = iframeWindowHeight + "px";

        }

        iframe.addEventListener("load", getIframeDocHeight);
        window.addEventListener("resize", getIframeDocHeight);
    }
});