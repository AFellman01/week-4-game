var globalcounter = 4;

$(document).ready(function() {

cards =["assets/images/koc.jpg", "assets/images/kos.jpg", "assets/images/kop.jpg", "assets/images/kow.jpg"]
// TrumpCard = ["assets/images/emp.jpg"]
	var counter = 0;
	var wins = 0;
	var losses = 0;
	$("#win").text(wins);
	$("#loss").text(losses)


	newCards();
	newGame();


	function newCards () {
		var numbers = []
			while(numbers.length < 4){
			  var randomnumber = Math.ceil(Math.random()*10)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
			}

		for (i = 0; i < numbers.length; i++) {
			var imageCard = $("<img>");
			imageCard.attr("data-num", numbers[i]);
			imageCard.attr("src", cards[i]);
			imageCard.attr("alt", "cards");
			imageCard.addClass("cardImage")
			$(".cards").append(imageCard);
		}
	}

	function newGame() {
    globalcounter = 4;
		counter = 0;
		$("#yourScore").text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

    var dealerDraw = randomIntFromInterval(16, 20)
		var blackJack = randomIntFromInterval(21,21);

		$(".value").text(blackJack);

		$(".dealerHand".text(dealerDraw);



		$(".cardImage").on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
        globalcounter--;
		    $("#yourScore").text(counter);

		    if (counter === blackJack && (counter > dealerValue)){
		      $("#message").text("Blackjack!");
		      wins ++;
		      $("#win").text(wins);
		      $(".cards").empty();
		      newCards();
		      newGame();
				}
				else if (counter < blackJack && globalcounter === 0 && (counter > dealerDraw)){
					$("message").text("You Win!")
					wins ++;
					$("#win").text(wins);
          $(".cards").empty();
		      newCards();
		      newGame()

		    } else if ( counter > blackJack || globalcounter === 0 || dealerDraw < blackJack){
		        $("#message").text("House wins!")
		        losses ++;
		        $("#loss").text(losses);
		        $(".cards").empty();
		        newCards();
		        newGame();
		    } else if (dealerDraw > blackJack || globalcounter === 0 || counter > blackjack)
				$("message").text("Bust!")
				$(".cards").empty();
				newCards();
				newGame();
		});
	}


});
