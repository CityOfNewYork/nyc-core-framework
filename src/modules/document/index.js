import "./_style.scss";

//////////////////////////////////////////////
// Document
//////////////////////////////////////////////

export default class Document {

    constructor() {
        
        ///////////////////////
        // Copyright Year
        ///////////////////////

        const copyrightYear = document.querySelector(".copyright-year");

        if (copyrightYear) {
            const currentYear = new Date().getFullYear();
            copyrightYear.innerHTML = currentYear;
        }

        ///////////////////////
        // Language & RTL 
        ///////////////////////

        window.addEventListener('load', () => {

            const googleSelect = document.querySelector(".goog-te-combo");

            if (typeof(googleSelect) != 'undefined' && googleSelect != null) {
              
                const translateLinkList = document.querySelectorAll("[data-lang]");

                translateLinkList.forEach((translateLink) => {
                    
                    translateLink.addEventListener("click", (event) => {

                        event.preventDefault();

                        let myLang = translateLink.getAttribute("data-lang");

                        setLanguage(myLang);

                    });
                });

                const setLanguage = (myLang) => {
                    googleSelect.value = myLang;
                    googleSelect.querySelector('option[value="' + myLang + '"]').selected = true;

                    fireEvent(googleSelect,'change');
                }

                const fireEvent = (element, event) => {

                    var evt;
                    
                    if (document.createEventObject){
                        evt = document.createEventObject();
                        return element.fireEvent('on' + event, evt)
                    } else {
                        evt = document.createEvent("HTMLEvents"); 
                        // event type, bubbling, cancelable
                        evt.initEvent(event, false, true);
                        return !element.dispatchEvent(evt);
                    }
                }  

            }

            const rtlTarget = document.querySelector("html");

            const rtlObserver = new MutationObserver((mutations) => {

                mutations.forEach(() => {

                    let single_class = "translated-rtl";

                    if (rtlTarget.classList.contains(single_class)) {
                        rtlTarget.setAttribute("dir", "rtl");
                    } else {
                        rtlTarget.setAttribute("dir", "ltr");
                    }

                });
            });

            const rtlConfig = {
                attributes: true,
                attributeFilter: ["class"]
            }

            rtlObserver.observe(rtlTarget, rtlConfig);

        });

        ///////////////////////
        // Custom Properties Polyfill
        ///////////////////////

        const isIE11 = /Trident\/|MSIE/.test(window.navigator.userAgent);

        const loadCustomPropertiesPolyfill = () => {

            const targetNode = document.querySelector('[name="viewport"]');
            const cpIEPolyfill = document.createElement('script');

            cpIEPolyfill.src = 'https://cdn.jsdelivr.net/npm/ie11-custom-properties@3.1.0/ie11CustomProperties.min.js';

            targetNode.parentNode.insertBefore(cpIEPolyfill, targetNode.nextSibling);

        }

        if (isIE11) {
            loadCustomPropertiesPolyfill();            
        }

    }
}