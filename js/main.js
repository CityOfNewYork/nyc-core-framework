$(document).ready(function () {

    ////////////////////////////////////////
    // Mutation observer - watch for RTL
    ////////////////////////////////////////

    var target = document.querySelector('html');

    var observer = new MutationObserver( function(mutations) {
        mutations.forEach( function(mutation) {
            var classes = target.getAttribute('class');
            var single_class = 'translated-rtl';
            if (classes.includes(single_class)) {
                target.setAttribute('dir', 'rtl');
            } else {
                target.setAttribute('dir', 'ltr');
            }
        });
    });

    var config = {
        attributes: true,
        attributeFilter: ['class']
    }
    
    observer.observe(target, config);
    
    ////////////////////////////////////////
    // Language and Search Toggles Shown
    ////////////////////////////////////////

    $('#global-search').on('shown.bs.collapse', function () {
        document.getElementById('global-search-bar').focus();
    }).on('show.bs.collapse', function () {
        document.getElementById('global-search-bar').blur();
    });

    $('#global-language').on('shown.bs.collapse', function () {
        $('.goog-te-combo').focus();
    }).on('show.bs.collapse', function () {
        $('.goog-te-combo').blur();
    });

    ////////////////////////////////////////
    // Language and Search Toggles Shown
    ////////////////////////////////////////

    $('#global-search').on('show.bs.collapse', function () {
        $('#global-language').collapse('hide');
    });

    $('#global-language').on('show.bs.collapse', function () {
        $('#global-search').collapse('hide');
    });

    ////////////////////////////////////////
    // Google Translate Links
    ////////////////////////////////////////

    $('.lang-select').click(function () {
        var theLang = jQuery(this).attr('data-lang');
        $('.goog-te-combo').val(theLang);
        window.location = $(this).attr('href');
        location.reload();
    });

});