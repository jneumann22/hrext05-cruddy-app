/*
listen for click event (edit)
update text in local storage (with key)
update display with new text value


 */

$(document).ready(function(){
  console.log("before\n", window.localStorage);
  

if (localStorage.length > 0) {
    var storageHolder = []
    Object.keys(localStorage).forEach(function(key){
      storageHolder.push(JSON.parse(localStorage.getItem(key)));
  });
}

  origApender = function(array){
    for (var i = 0; i<array.length; i++){
      $("#events").prepend(`<li id = ${JSON.stringify(array[i][3])}> ${array[i][3]} <br> Date: ${array[i][0]} <br> Location: ${array[i][1]} <br> Time: ${array[i][2]} <br> <button class="edit">Edit</button> <button class="delete">Delete</button></li>`)
    }
  } 

  if (localStorage.length>0){
    origApender(storageHolder);

    $('.delete').on('click', function(){
      $(this).parent().remove();
      localStorage.removeItem(this.parentElement.id)
    });

    $(".edit").on("click", function(){
      $(this).parent().remove();
        var handler = JSON.parse(localStorage[this.parentElement.id])
      

       $("#datepicker").val(handler[0]);
        $("#location").val(handler[1]);
        $("#timepicker").val(handler[2]);
        $("#event-title").val(handler[3]);
      
      localStorage.removeItem(this.parentElement.id);
    });
    
  
};


  


  // add event listener
  $(".add-text-btn").on("click", function(){

    var values = [$('#datepicker').val(), $('#location').val(), $('#timepicker').val(), $('#event-title').val()]


    var curTextValue =  JSON.stringify(values);// reading from <input>   $('#theValue').val() 
    var curKeyValue = $('#event-title').val(); 

    if (localStorage[curKeyValue]) {
      alert('You already have an event with that name! Try something else!')
    } else {

    localStorage.setItem(curKeyValue, curTextValue);
    $("#events").append(`<li id = ${curKeyValue}> ${curKeyValue} <br> Date: ${values[0]} <br> Location: ${values[1]} <br> Time: ${values[2]} <br> <button class="edit">Edit</button> <button class="delete">Delete</button></li>`)
    $("#datepicker, #location, #timepicker, #event-title").val("")

  }
    $('.delete').on('click', function(){
      $(this).parent().remove();
      localStorage.removeItem(this.parentElement.id)
    });

    

    $(".edit").on("click", function(){
      $(this).parent().remove();
        var handler = JSON.parse(localStorage[this.parentElement.id])
      

       $("#datepicker").val(handler[0]);
        $("#location").val(handler[1]);
        $("#timepicker").val(handler[2]);
        $("#event-title").val(handler[3]);
      
      localStorage.removeItem(this.parentElement.id);
    });


  });







    



  // listen for click event (del)
  $(".clear-cache-btn").on("click", function(){
    // clear local storage
    localStorage.clear();
    $("#events").empty();
  });



});