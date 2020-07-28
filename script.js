$(document).ready(function() {
    // listen for save button clicks
  
    $(".saveBtn").on("click", function() {
      // get nearby values
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      console.log('value:', value);
      console.log('time:', time);
  
      //
      // save the value in localStorage as time
      localStorage.setItem(time, value);
      //

    });
  
    function hourUpdater() {
      // get current number of hours
      var currentHour = moment().hours();
      console.log('current hour:', currentHour);
  
      // loop over time blocks
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        console.log("block hour:", blockHour);
  
        // check if we've moved past this time
      

        // if the current hour is greater than the block hour then add class "past"


            
        if (currentHour > blockHour) {
            $(this).addClass("past");

           // if they are equal then remove class "past" and add class "present"
        } else if (currentHour === blockHour) {
            $(this).removeClass("past")
            $(this).addClass("present");

            // remove class "past", remove class "present", add class "future"
        } else {
            $(this).removeClass("past", "present");
            $(this).addClass("future");
        
        }
    
      });
      
}
  
    hourUpdater();

  
    // set up interval to check if current time needs to be updated
    // which means execute hourUpdater function every 15 seconds
    var interval = setInterval(hourUpdater(), 15000);

    

    // load any saved data from localStorage
   
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));

    $("#hour-10 .description").val(localStorage.getItem("hour-10"));

    $("#hour-11 .description").val(localStorage.getItem("hour-11"));

    $("#hour-12.description").val(localStorage.getItem("hour-12"));

    $("#hour-13 .description").val(localStorage.getItem("hour-13"));

    $("#hour-14 .description").val(localStorage.getItem("hour-14"));

    $("#hour-15 .description").val(localStorage.getItem("hour-15"));

    $("#hour-16 .description").val(localStorage.getItem("hour-16"));

    $("#hour-17 .description").val(localStorage.getItem("hour-17"));


  
    // display current day on page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
  });