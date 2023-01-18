(function($, _, ts) {

    $(window).on('crmLoad', function(event) {
        // External Identifier
        $('.crm-contact_external_identifier_label', event.target).parent().each(function() {
            $(this).append('<i title="' + ts('Copy to clipboard') + '" class="fa fa-clipboard crm-iomisc-button crm-iomisc" aria-hidden="true"></i>');
          });
        // Must be mouseup to stopPropagation from crmFormInline
        // c.f. templates/CRM/Contact/Page/View/Summary.js
        $('.crm-iomisc', event.target).on('mouseup', function(event) {
            event.preventDefault();
            event.stopPropagation();
            $(this).addClass('crm-iomisc-animated');
            $(this).parent().find('.crm-contact_external_identifier_label').each(function() {
              var txt = $(this).text().trim();
              navigator.clipboard.writeText(txt);
            });
            return false;
          });

        $('.crm-iomisc-button', event.target).on('animationend', function(event) {
            $(this).removeClass('crm-iomisc-animated');
          });
    });
})(CRM.$, CRM._, CRM.ts('iomisc'));