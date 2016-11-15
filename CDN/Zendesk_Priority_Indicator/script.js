$(document).ready(function() {
    setTimeout(function() {
        if (window.location.href.indexOf('agent/filters') > 0) {
            var leadingField = $('.leading');
            var trailingField = $('.trailing');
            var leading = $(this).find(leadingField);
            var trailing = $(this).find(trailingField);
            $('.filter_tickets tbody tr').each(function() {
                var priorityField = $('td.24061996');
                var priority = $(this).find(priorityField).text();
                var leadingField = $('.leading');
                var trailingField = $('.trailing');
                var leading = $(this).find(leadingField);
                var trailing = $(this).find(trailingField);
                if (priority == 'High') {
                    $(this).addClass('high-ticket-priority');
                    $(leading).addClass('high-ticket-priority');
                    $(trailing).addClass('high-ticket-priority')
                }
                if (priority == 'Urgent') {
                    $(this).addClass('urgent-ticket-priority');
                    $(leading).addClass('urgent-ticket-priority');
                    $(trailing).addClass('urgent-ticket-priority')
                }
            })
        }
    }, 1200)
});
$('*').click(function() {
    setTimeout(function() {
        if (window.location.href.indexOf('agent/filters') > 0) {
            var leadingField = $('.leading');
            var trailingField = $('.trailing');
            var leading = $(this).find(leadingField);
            var trailing = $(this).find(trailingField);
            $('.filter_tickets tbody tr').each(function() {
                var priorityField = $('td.24061996');
                var priority = $(this).find(priorityField).text();
                var leadingField = $('.leading');
                var trailingField = $('.trailing');
                var leading = $(this).find(leadingField);
                var trailing = $(this).find(trailingField);
                if (priority == 'High') {
                    $(this).addClass('high-ticket-priority');
                    $(leading).addClass('high-ticket-priority');
                    $(trailing).addClass('high-ticket-priority')
                }
                if (priority == 'Urgent') {
                    $(this).addClass('urgent-ticket-priority');
                    $(leading).addClass('urgent-ticket-priority');
                    $(trailing).addClass('urgent-ticket-priority')
                }
            })
        }
    }, 1200)
})