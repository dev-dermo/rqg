
$(document).ready(function() {
    
    var quotes = [
        ["Norman Schwarzkopf", "The truth of the matter is that you always know the right thing to do. The hard part is doing it."],
        ["John Adams", "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish."],
        ["Alexander Pope", "Blessed is the man who expects nothing, for he shall never be disappointed."],
        ["Lao Tzu", "Be Content with what you have; rejoice in the way things are. When you realize there is nothing lacking, the whole world belongs to you."],
        ["Dalai Lama", "With realization of ones own potential and self-confidence in ones ability, one can build a better world."],
        ["Robert Stevenson", "Don't judge each day by the harvest you reap but by the seeds you plant."]
    ]
    
    $(".btn").on("click", function() {
        var random = Math.floor((Math.random() * 6));
        $(".quote").html("<blockquote>" + quotes[random][1] + "</blockquote><em>" + quotes[random][0] + "</em>");
    });
});


