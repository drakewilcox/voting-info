$(document).ready(function() {
  $("#add").submit(function(event) {
    
    var age = parseInt($("input#add1").val());  
    console.log(age);
    console.log(typeof(age));
    if (age > 18) {
      $("#over18").show();
      
    } else {
      $("#under18").show();
    } 
    event.preventDefault();

   });
  });
  
<img src="smiley.gif" alt="Smiley face" height="42" width="42"></img>