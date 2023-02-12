
$(".search-btn").mouseenter(function(){
    $(".search-btn").empty().append('<input class="form-control me-2 search-input" type="search" placeholder="Search">');});// $(".search-input").hide();
    $(".search-btn").mouseenter(function(){
    $(".search-btn").empty().append('<input class="form-control me-2 search-input" type="search" placeholder="Search">');});

$(".signme").click(function () { 
    $("title").text("SIAS Signup");
});
$(".logme").click(function () { 
    $("title").text("SIAS Login");
});
$(document).ready(function() {
    $('#teacherCheckbox').click(function() {
      $('#studentCheckbox').prop('checked', false);
    });
    $('#studentCheckbox').click(function() {
      $('#teacherCheckbox').prop('checked', false);
    });
  });