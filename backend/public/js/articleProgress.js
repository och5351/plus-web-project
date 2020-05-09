// 스크롤 프로그레스바
$(document).on('scroll', function() {
    var winHeight = $(window).height();
    var docHeight = $(document).height();
    var progressBar = $('progress');
    var max, value;

    max = docHeight - winHeight;
    progressBar.attr('max', max);
    value = $(window).scrollTop();

    progressBar.attr('value', value);
})