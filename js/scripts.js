$(document).ready(function() {

  getThingSpeakData(1417);

  $("#buttonToClick").click(function() {
    $("#response").html("Hello, World!");
  });

});

function getThingSpeakData(channel) {

  // contruct URL to get
  url = 'http://api.thingspeak.com/channels/' + channel + '/feed/last.json';

  // get ThingSpeak data using AJAX
  $.ajax({url: url, success: function(data){
      // check if field1 has data
      if (data.field1) {
        $("#response").html(data.field1);
      }
      else {
        $("#response").html("No Data");
      }
  }});

}
