$(document).ready(function() {




    $("#formOne").submit(function(event) {
      alert("Submission Success!");
      var endNumber = parseFloat($("input#endNum").val());
      var stepNumber = parseFloat($("input#stepNum").val());
      var startNumber = parseFloat($("input#startNum").val());


      if (endNumber != Number || stepNumber != Number || startNumber != Number) {
        alert("Please enter a number!");
        return false;
      } else if (endnumber < 0 || stepNumber < 0 || startNumber < 0) {
        alert("Please enter a positive number!");
      } else if (stepNumber+startNumber > endNumber) {
        alert("Warning the step is larger than the end!")
      } else {
        for (var counter=startNumber; counter <= endNumber; counter+=stepNumber) {
          alert(counter);
        }
      }


    event.preventDefault();
    });
});
