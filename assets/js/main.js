jQuery(document).ready(function ($) {

    // $('body').on('updated_checkout', function () {
    //     var $shippingMethod = $('#shipping_method');                  // id родителя радиокнопок
    //     var $officeAddresses = $('#my_custom_checkout_field');        // новое поле
    //     var $officeAddressAuto = $('#office_address_field');          // id  tag p - формируется автоматически
    //
    //     $val = $shippingMethod.find('input[type="radio"]:checked').val();
    //
    //     if ($val === 'local_pickup:11') {
    //         $officeAddresses.show();
    //     } else {
    //         $officeAddresses.hide();
    //         // $officeAddresses.remove();
    //     }
    //     // console.log($val);
    // });


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
                // console.log('response: ', response);

                if (response) {
                    $('#office_address_field_container').html(response);
                }
            }
        });

    });




});

