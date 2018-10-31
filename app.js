/*
listen for click event (edit)
update text in local storage (with key)
update display with new text value


 */

$(document).ready(function(){
  console.log("before\n", window.localStorage);


  // add event listener
  $(".add-text-btn").on("click", function(){
    



    var values = [$('#datepicker').val(), $('#location').val(), $('#time').val(), $('#event-title').val()]


    var curTextValue =  JSON.stringify(values);// reading from <input>   $('#theValue').val() 
    var curKeyValue = $('#event-title').val(); 

    if (localStorage[curKeyValue]) {
      alert('You already have an event with that name! Try something else!')
    } else {


    // change to dynamic key?#
    localStorage.setItem(curKeyValue, curTextValue);
    $("#events").append(`<li id = ${curKeyValue}> ${curKeyValue} <button class="delete">Delete</button> <br> Date: ${values[0]} <br> Location: ${values[1]} <br> Time: ${values[2]} <br> <button class="edit">Edit</button></li>`)
  }
    $('.delete').on('click', function(){
      $(this).parent().remove();
      localStorage.removeItem(curKeyValue)
    });

    $("#date, #location, #time, #event-title").val("")

    $(".edit").on("click", function(){
      $(this).parent().remove();
      var handler = JSON.parse(localStorage[curKeyValue])
      console.log(handler[0]);
      $("#datepicker").val(handler[0]);
      $("#location").val(handler[1]);
      $("#time").val(handler[2]);
      $("#event-title").val(handler[3]);
      localStorage.removeItem(curKeyValue);
    });

  });







    



  // listen for click event (del)
  $(".clear-cache-btn").on("click", function(){
    // clear local storage
    localStorage.clear();
    $("#events").empty();
  });



});