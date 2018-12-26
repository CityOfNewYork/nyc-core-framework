$(document).ready(function () {

    (function () {
        'use strict';
        window.addEventListener('load', function () {

            var forms = document.getElementsByClassName('needs-validation');

            var validation = Array.prototype.filter.call(forms, function (form) {
                
                form.addEventListener('submit', function (event) {

                    if (form.checkValidity() === false) {

                        event.preventDefault();
                        event.stopPropagation();

                        var alert_target = $('#form-error-message');
                        var invalid_target = $(':invalid');

                        alert_target.removeClass('d-none');
                        alert_target.attr("tabindex", "-1");
                        alert_target.focus();
                        
                        invalid_target.closest('.form-group').addClass('is-invalid');

                    }

                    form.classList.add('was-validated');

                }, false);
            });
        }, false);
    })();
    
    $('.form-control').blur(function () {
        if (!$(this).is(":invalid")) {
            $(this).closest('.form-group').removeClass('is-invalid');
        }
    });
    $('custom-control-input').change(function () {
        if (!$(this).is(":invalid")) {
            $(this).closest('.form-group').removeClass('is-invalid');
        }
    });

});
