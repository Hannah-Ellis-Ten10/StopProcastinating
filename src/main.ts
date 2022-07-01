import player from "play-sound";

player().play("../resources/stop.mp3",function(err){
    if (err){
        console.log("error");
    }
  });