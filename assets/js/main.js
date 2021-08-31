jQuery(document).ready(function ($) {

    $("body").on("updated_checkout", function () {

        $.ajax({
            url: mb_localize.admin_url,
            type: "POST",
            data: {
                'action': 'mb_update_office_address_checkout_field',
            },
            error: function () {
                console.log('error');
            },
            success: function (response) {
                if (response) {
                    $('#office_address_field_container').html(response);
                }
            }
        });

    });




});

