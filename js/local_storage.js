$(document).ready(function() {

  // bind events to buttons
  $("#get").click(function() {
    // get channel number
    var channel = $("#channel").val();

    // get thingspeak data for channel
    if (channel) {
      getThingSpeakData(channel);
    }
    else {
      alert("Enter a channel");
    }
  });

  $("#save").click(function() {
    var channel = $("#channel").val();

    if (channel) {
      localStorage.setItem("channel", channel);
    }
    else {
      alert("Enter a channel");
    }
  });

  // load local storage data
  var channel = localStorage.getItem("channel");

  if (channel) {
    $("#channel").val(channel);
  }


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