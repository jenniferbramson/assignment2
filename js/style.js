//$('success').hide();

$('#account').submit(function(e) {
  var inputs = [$('#fname'), $('#lname'), $('#org'), $('#dep')];
  var errorFields = [$("#fname_error"), $("#lname_error"), $("#org_error"), $("#dep_error")];
  var allFilled = true;

  for (i = 0; i < inputs.length - 1; i++) {
    if(!inputs[i].val()) {
      errorFields[i].html(inputs[i].attr('name') + " must be filled");
      allFilled = false;
    } else {
      errorFields[i].html("");
    }
  }

  if(inputs[3].val() == 'None') {
    $("#dep_error").html(inputs[3].attr('name') + " must be filled");
    allFilled = false;
  } else {
    $("#dep_error").html("");
  }

  if(allFilled) {
    $('#account').hide();
    $('#accTitle').hide();
    $('#success').show();
  }

  e.preventDefault();
});


