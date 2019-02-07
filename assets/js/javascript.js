$(document).ready(function(){

var config = 
{
    apiKey: "AIzaSyDy96rlH765NZjyDON38h5UZ7SXDjT4j-k",
    authDomain: "homework7-34567.firebaseapp.com",
    databaseURL: "https://homework7-34567.firebaseio.com",
    projectId: "homework7-34567",
    storageBucket: "homework7-34567.appspot.com",
    messagingSenderId: "506822567894"
};

firebase.initializeApp(config);

// link -> https://homework7-34567.firebaseio.com/

var database = firebase.database();
  

$("#add-train-btn").on("click", function(event) 

    {
        event.preventDefault();


          var trname = $("#trainname-input").val().trim();
          var desname = $("#des-input").val().trim();
          var fttname = $("#ftt-input").val().trim();
          var freqname = $("#freq-input").val().trim();

          var newTrain = {

            name: trname,
            destination: desname,
            firsttraintime: fttname,
            frequency: freqname

          };

          database.ref().push(newTrain);
          
          console.log(newTrain.name);
          console.log(newTrain.destination);
          console.log(newTrain.firsttraintime);
          console.log(newTrain.frequency);

          var trname = $("#trainname-input").val("");
          var desname = $("#des-input").val("");
          var fttname = $("#ftt-input").val("");
          var freqname = $("#freq-input").val("");
    });

database.ref().on("child_added", function(childSnapshot) 

    {
        console.log(childSnapshot.val());

          var fbtrname = childSnapshot.val().name;
          var fbdesname = childSnapshot.val().destination;
          var fttname = childSnapshot.val().firsttraintime;
          var fbfreqname = childSnapshot.val().frequency;

          var firstTime = moment(fttname, "hh:mm A").subtract(1, "years");
          var diffTime = moment().diff(moment(firstTime), "minutes");
          var tRemainder = Math.floor(diffTime % fbfreqname);
          var tMinutesTillTrain = fbfreqname - tRemainder;
          var nextTrain = moment().add(tMinutesTillTrain, "minutes");
          var nextTrainIn = moment(nextTrain).format("hh:mm A");

          var newRow = $("<tr>").append(
            $("<td>").text(fbtrname),
            $("<td>").text(fbdesname),
            $("<td>").text(fbfreqname),
            $("<td>").text(nextTrainIn),
            $("<td>").text(tMinutesTillTrain),
          );

          $("#train-table > tbody").append(newRow);

    });

});
