// This tells which json file to use
var url='https://raw.githubusercontent.com/slythersparrow/CRK-guide/slythersparrow-patch-1/scripts/json/test%20with%20key.json';

// This tells the page to wait until jQuery has loaded, so the Ajax call can be called
$(document).ready(function(){
    $.ajax({
        url: url,
        dataType: 'json',
        error: function(){
          console.log('JSON FAILED for data');
        },
        success:function(results){
    /* the results is your json, you can reference the elements directly by using it here, without creating any additional variables */
        var cartItemsList = document.getElementById("demo3");
        cartItemsList.innerHTML = results.cookie0530.cookieName;
      }  // end of success fn
     }) // end of Ajax call
   }) // end of $(document).ready() function