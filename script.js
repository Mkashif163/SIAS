
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

// log in check boxex teacher of student to check one at a time
$(document).ready(function() {
    $('#teacherCheckbox').click(function() {
      $('#studentCheckbox').prop('checked', false);
    });
    $('#studentCheckbox').click(function() {
      $('#teacherCheckbox').prop('checked', false);
    });
  });

// pop for create claass
$(document).ready(function() {
  // When the "Create Class" button is clicked, get the value of the class name input and create a new card
  $('#createClassBtn').click(function() {
    var className = $('#classNameInput').val();
    var newCard = '<div class="card m-3" style="width: 18rem; min-width: 16rem;">' +
                  '<i class="card-img-top fa-solid fa-folder-open fa-8x p-lg-5"></i>' +
                  '<div class="card-body">' +
                  '<p class="card-text">' + className + '</p>' +
                  '</div>' +
                  '</div>';
    $('.card-append').append(newCard);
    // Close the modal after the new card is created
    $('#exampleModal').modal('hide');
  });
});



