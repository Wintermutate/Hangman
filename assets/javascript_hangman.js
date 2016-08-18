<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<title>javascript_hangman</title>
</head>
<body>
<script type="text/javascript">
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z", ];
	var wrongattempts = [];
	var attempts = [];
	var attempt = "";
	var attemptNotInanswer = alphabet;
	var answer; 
	var attemptPuzzle; 
	var wins = 0;
	var losses = 0; 
	var workingPuzzle; 
	var puzzleIndex = 0; 

	var puzzles = [puzzel1, puzzle2, puzzle3, puzzel4, puzzle5, puzzle6];
	var puzzel1 = "Eldritch";
	var puzzle2 = "Cyclopean";
	var puzzle3 = "Stygian";
	var puzzle4 = "Madness";
	var puzzle5 = "Daemoniac";
	var puzzle6 = "Charnel";
	var newPuzzle = function (){
		workingPuzzle = puzzles[puzzleIndex]
		answer = (workingPuzzle.toLowerCase());
	};
	displayPuzzle = function (){

	}
	var startGame = function(){
		newPuzzle();
		wins = 0;
		losses = 0;
		displayPuzzle();
	};
	

	
	
</script>

	
</body>
</html>