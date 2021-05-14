function validateEmail(){
  var emailid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var inputEmail = $(".email").val();
  if (emailid.test(inputEmail)) {
    $(".email").removeClass("wrong-email");
    $(".valid-email").html("You are registered.").css("color","#fff");
  }
  else {
    $(".invalid-email").html("Please input a valid email id.").css("color","hsl(12, 88%, 59%)");
    $(".email").addClass("wrong-email");
  }
}
