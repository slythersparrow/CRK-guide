// This tells which json file to use
const url='https://raw.githubusercontent.com/slythersparrow/CRK-guide/main/scripts/json/cookie-profile-data.json';
const url2='https://raw.githubusercontent.com/slythersparrow/CRK-guide/main/scripts/json/test.json';
// This tells the page to wait until jQuery has loaded, so the Ajax call can be called
$(document).ready(function(){
  $.ajax({
    url: url2,
    dataType: 'json',
    error: function(){
      console.log('JSON FAILED for data');
    },
    success:function(results){
    /* the results is your json, you can reference the elements directly by using it here, without creating any additional variables */
      let cartItemsList = document.getElementById("demo3");
      let a = 'cookie0537';
      //cartItemsList.innerHTML = results[a]['skillStatBase'][0];
      cartItemsList.innerHTML = results['rarities'][0]['ancient'];
    }  // end of success fn
  }) // end of Ajax call
}) // end of $(document).ready() function