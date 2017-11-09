$(document).ready(function() {

  // bind the click event to the button
  $("#buttonToClick").click(function() {
    getThingSpeakData(1417);
  });

  // periodically get
  setInterval(function(){ getThingSpeakData(1417); }, 3000);

});

function getThingSpeakData(channel) {

  // contruct URL to get
  url = 'http://api.thingspeak.com/channels/' + channel + '/feed/last.json';

  // get ThingSpeak data using AJAX
  $.ajax({url: url, success: function(data){
      // check if field1 has data
      if (data.field1) {
        $("#response").html(data.field1);
        $("body").css('background-color', data.field2);
      }
      else {
        $("#response").html("No Data");
      }
  }});

}
