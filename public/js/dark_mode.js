$('.change').on('click', function () {
    if ($('body').hasClass('dark')) {
        $('body').removeClass('dark');
        $('.change').text('OFF');
    } else {
        $('body').addClass('dark');
        $('.change').text('ON');
    }
});
