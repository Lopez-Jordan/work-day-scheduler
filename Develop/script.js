var currentHour = dayjs().hour();
currentHour = String(currentHour);
console.log(currentHour);

var hour09 = $("#hour-09").attr("id"); // string
var hour10 = $("#hour-10").attr("id"); // string
var hour11 = $("#hour-11").attr("id"); // string
var hour12 = $("#hour-12").attr("id"); // string
var hour13 = $("#hour-13").attr("id"); // string
var hour14 = $("#hour-14").attr("id"); // string
var hour15 = $("#hour-15").attr("id"); // string
var hour16 = $("#hour-16").attr("id"); // string
var hour17 = $("#hour-17").attr("id"); // string

$(function () {
  $("#hour-09 button").on("click", function(){
    localStorage.setItem(hour09, $("#hour-09 textarea").val());
  });
  $("#hour-10 button").on("click", function(){
    localStorage.setItem(hour10, $("#hour-10 textarea").val());
  });
  $("#hour-11 button").on("click", function(){
    localStorage.setItem(hour11, $("#hour-11 textarea").val());
  });
  $("#hour-12 button").on("click", function(){
    localStorage.setItem(hour12, $("#hour-12 textarea").val());
  });
  $("#hour-13 button").on("click", function(){
    localStorage.setItem(hour13, $("#hour-13 textarea").val());
  });
  $("#hour-14 button").on("click", function(){
    localStorage.setItem(hour14, $("#hour-14 textarea").val());
  });
  $("#hour-15 button").on("click", function(){
    localStorage.setItem(hour15, $("#hour-15 textarea").val());
  });
  $("#hour-16 button").on("click", function(){
    localStorage.setItem(hour16, $("#hour-16 textarea").val());
  });
  $("#hour-17 button").on("click", function(){
    localStorage.setItem(hour17, $("#hour-17 textarea").val());
  });



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?



  for (var i=9; i<18; i++){
    var hour = "#hour-"+ String(i);
    var hourEl = $(hour);
    hourEl.removeClass("past");
  
    if (hour.slice(-2) < currentHour){
      hourEl.addClass("past");
    }
    else if (hour.slice(-2) == currentHour){
      hourEl.addClass("present");
    }
    else {
      hourEl.addClass("future");
    }
  }





  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
     var date = dayjs().format("dddd MMMM-D, YYYY");
     $("#currentDay").text(date);
});
