//////////////////////////////////////////////
// Google Translate Buttons
//////////////////////////////////////////////

export default class GoogleTranslateButtons {

    constructor() {

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

        });
    }
}