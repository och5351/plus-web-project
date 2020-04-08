
function toggleComments() {
    // Toggle Comments/ 댓글 토글
    $("#commentListItem").toggle();

    // Changes btn's arrow direction/ 화살표 방향 변경
    if ($("#commentListItem").is(":visible") == false) {
        $("#span-btnOpenComments").attr("class", "fa fa-caret-down");
    } else {
        $("#span-btnOpenComments").attr("class", "fa fa-caret-up");
    }
}