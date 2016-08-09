/*
$(document).ready(function() {
	$(".btn").on("click", function(){
		$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json) {
			$(".quote").html(JSON.stringify(json));
		});
	});
});
*/

$(document).ready(function() {
    var quotes = new Object();
    quotes["Norman Schwarzkopf"] = "The truth of the matter is that you always know the right thing to do. The hard part is doing it.";
    quotes["John Adams"] = "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish.";
    quotes["Alexander Pope"] = "Blessed is the man who expects nothing, for he shall never be disappointed.";
    quotes["Lao Tzu"] = "Be Content with what you have; rejoice in the way things are. When you realize there is nothing lacking, the whole world belongs to you.";
    quotes["Dalai Lama"] = "With realization of ones own potential and self-confidence in ones ability, one can build a better world.";
    quotes["Robert Stevenson"] = "Don\'t judge each day by the harvest you reap but by the seeds you plant.";
    
    for (var key in quotes) {
        alert(key + " -> " + quotes[key]);
    }
});


