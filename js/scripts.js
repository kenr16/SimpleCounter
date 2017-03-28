$(document).ready(function() {

    $("#formOne").submit(function(event) {
      alert("Submission Success!");
      var endNumber = parseFloat($("input#endNum").val());
      var stepNumber = parseFloat($("input#stepNum").val());
      var startNumber = parseFloat($("input#startNum").val());


      if (endNumber != Number || stepNumber != Number || startNumber != Number) {
        alert("Please enter a number!");
        return
      } else if (endnumber < 0 || stepNumber < 0 || startNumber < 0) {
        alert("Please enter a positive number!");
        return
      } else if (stepNumber+startNumber > endNumber) {
        alert("Warning the step is larger than the end!")
        return
      } else {
        for (var counter=startNumber; counter <= endNumber; counter+=stepNumber) {
          alert(counter);
        }
      }
    event.preventDefault();
    });


    $("#formTwo").submit(function(event) {
      alert("Submission Success!");
      var friends = ["Ken", "James", "Ben", "Dan",];

      for (var friend=0; friend <=3; friend++) {
        alert("Hello, "+friends[friend]+"!");
      }//

      var numbers = [1, 2, 3, 4];
      for(var a=0; a<numbers.length; a++ ) {
        alert(numbers[a]*2);
      }
    event.preventDefault();
    });

    // *******************************
    // Back End Logic
    // *******************************
    var vowelReplace = function(sentInt) {
      var outputString = ""
      for (var b=0; b<sentInt.length; b++) {
        var letter = sentInt[b];
        if(letter == "a" ||
           letter == "e" ||
           letter == "i" ||
           letter == "o" ||
           letter == "u"){
             outputString = outputString + "-";
        } else {
          outputString = outputString + sentInt[b];
        }
      }
        return outputString
    };


    // *******************************
    // Front End Logic
    // *******************************
    $("#formThree").submit(function(event) {
      var sentenceInput = $("input#sentIn").val();
      //var finalString = sentenceInput.replace(/[a,e,i,o,u]/gi, "-");
      alert(vowelReplace(sentenceInput));
      event.preventDefault();
    });

    // *******************************
    // Back End Logic - palindrome
    // *******************************

    function reverseString(palinInput) {
      var splitString = palinInput.split("");
      var reverseArray = splitString.reverse();
      var joinArray = reverseArray.join("");
      return joinArray;
    };


    // *******************************
    // Front End Logic
    // *******************************

    $("#formFour").submit(function(event) {
      var palInput = $("input#pal").val();
      var palOutput = reverseString(palInput);
      if (palOutput.toUpperCase() === palInput.toUpperCase()){
      alert("your word is a palindrome");
    } else {
      alert("your word is not a palindrome");
    }
      event.preventDefault();
    });



    $("#formFive").submit(function(event) {

      var priInput = parseInt($("input#primeInput").val());
      var listOfNums = [];
      for (i=0; i <= priInput; i++) {
        listOfNums.push(i);
      }

      var reavedNums = [];
      //var joinedArray = listOfNums.join("");
      for (var j=2; j<=priInput; j++) {
        for (var k=2; k<j; k++) {
          if (j%k === 0) {
            //alert(listOfNums[j]);
            listOfNums.splice(j, 1, "x");
            // if (reavedNums != j) {
            //   listOfNums.splice(j, 1);
            reavedNums.push(j);
          }
        }
      }
      displayArray = [];
      listOfNums.forEach(function(nummy) {
        if (nummy == "x") {
        } else if (nummy == 0 || nummy == 1) {
        } else {
          displayArray.push(nummy);
        }
      });
      alert(displayArray);


      // for (var l=2; l<=priInput; l++) {
      //   reavedNums.forEach(function(rev) {
      //     if (l == rev) {
      //       alert(l);
      //       alert(listOfNums[j]);
      //       listOfNums.splice(j, 1);
      //     }
      //   });
      // }
      //alert(reavedNums);
      //alert(listOfNums);
      event.preventDefault();
    });

});
