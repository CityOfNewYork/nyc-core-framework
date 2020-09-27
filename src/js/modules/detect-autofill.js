//////////////////////////////////////////////
// Collapse
//////////////////////////////////////////////

import "custom-event-polyfill";

export default class DetectAutofill {

    constructor() {

        document.addEventListener('animationstart', onAnimationStart, true);
        document.addEventListener('input', onInput, true);

        /**
         * Handler for -webkit based browser that listen for a custom
         * animation create using the :pseudo-selector in the stylesheet.
         * Works with Chrome, Safari
         *
         * @param {AnimationEvent} event
         */
        function onAnimationStart(event) {
            ('onautofillstart' === event.animationName) ?
            autocomplete(event.target):
            cancelAutocomplete(event.target);
            console.warn("WHOOOOPS!", event.target);
            // event.target.closest(".form-entry").classList.add("has-value");
        }

        /**
         * Handler for non-webkit based browser that listen for input
         * event to trigger the autocomplete-cancel process.
         * Works with Firefox, Edge, IE11
         *
         * @param {InputEvent} event
         */
        function onInput(event) {
            ('insertReplacementText' === event.inputType || !('data' in event)) ?
            autocomplete(event.target):
                cancelAutocomplete(event.target);
        }

        /**
         * Manage an input element when its value is autocompleted
         * by the browser in the following steps:
         * - add [autocompleted] attribute from event.target
         * - create 'onautocomplete' cancelable CustomEvent
         * - dispatch the Event
         *
         * @param {HtmlInputElement} element
         */
        function autocomplete(element) {
            if (element.hasAttribute('autocompleted')) return;
            element.setAttribute('autocompleted', '');
            


            var event = new window.CustomEvent('onautocomplete', {
                bubbles: true,
                cancelable: true,
                detail: null,
            });

            // no autofill if preventDefault is called
            if (!element.dispatchEvent(event)) {
                element.value = '';
            }
        }

        /**
         * Manage an input element when its autocompleted value is
         * removed by the browser in the following steps:
         * - remove [autocompleted] attribute from event.target
         * - create 'onautocomplete' non-cancelable CustomEvent
         * - dispatch the Event
         *
         * @param {HtmlInputElement} element
         */
        function cancelAutocomplete(element) {

            if (!element.hasAttribute('autocompleted')) {
                return;
            } else {
                element.removeAttribute('autocompleted');
            }
                
            // dispatch event
            element.dispatchEvent(new window.CustomEvent('onautocomplete', {
                bubbles: true,
                cancelable: false,
                detail: null,
            }));
        }
        
    }
}