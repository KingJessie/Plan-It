// Display current date and time

var currentDay = moment().format("dddd D MMMM YYYY, h:mm:ss a");
$("#currentDay").text(currentDay);


// Variable to store the saved button element, which will be used as an event listener when clicked.
var saveBtn = $(".saveBtn button");


// Save text to local storage when button is clicked

saveBtn.on("click", function () {
  var hour = $(this).attr("class");
  var savedText = $(this).parent().siblings(".textArea").val();

  localStorage.setItem(hour, savedText);
  console.log(savedText, hour)
});


// Function for time block to change color when hour is in present, past or future

function colorChange() {
  var hour = moment().hours();

  $(".time-block").each(function () {
    var currentHour = parseInt($(this).attr("id"));

    if (currentHour > hour) {
      $(this).addClass("future");
    } else if (currentHour === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });
}

colorChange();



