$(document).ready(function(){
	//initialize firebase
	var config = {
	apiKey: "AIzaSyAGowl1Xax1hYWfr0QHvBPFMl133-HxrcQ",
	authDomain: "trainschedule-81cdb.firebaseapp.com",
	databaseURL: "https://trainschedule-81cdb.firebaseio.com",
	storageBucket: "trainschedule-81cdb.appspot.com",
	};
	firebase.initializeApp(config);

	//variables
	var database = firebase.database();

	var name = '';
	var dest = '';
	var first = 0;
	var freq = 0;

	//create on click for button to submit new train
	$('#submit').on('click', function(){
		//grab user input
		name = $('#name').val().trim();
		dest = $('#dest').val().trim();
		first = $('#first').val().trim();
		freq = $('#freq').val().trim();

	//temp object for train data
	var newTrain = {
		tname: name,
		tdest: dest,
		tfirst: first,
		tfreq: freq
	}

	//console log to check
	console.log(newTrain.tname);
	console.log(newTrain.tdest);
	console.log(newTrain.tfirst);
	console.log(newTrain.tfreq);

	//send to firebase
	database.ref().push(newTrain);

	//clear inputs
	$('#name').val("");
	$('#dest').val("");
	$('#first').val("");
	$('#freq').val("");
	//append values to train schedule
	//attempt update/remove
	//try to implement user authentication
	})
})