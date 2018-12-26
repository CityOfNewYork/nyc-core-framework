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
                        invalid_target.closest('.form-group').addClass('is-invalid');
                                
                            console.log(alert_target);
                        $('html, body').animate({
                            scrollTop: alert_target.offset().top - 16
                        }, {
                            duration: 600,
                            complete: function () {
                                alert_target.attr("tabindex", "-1");
                                alert_target.focus();
                            }
                        });
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
