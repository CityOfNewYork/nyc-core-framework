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

                        var invalid_target = $('.form-control:invalid');

                        invalid_target.closest('.form-group').addClass('is-invalid');

                        $('.alert').removeClass('d-none');

                        $('html, body').animate({
                            scrollTop: $("#form-errors").offset().top - 16
                        }, {
                            duration: 600,
                            complete: function () {
                                $("#form-errors").attr("tabindex", "0");
                                $("#form-errors").focus();
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

});
