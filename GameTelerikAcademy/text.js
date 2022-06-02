
//-----------------------------------------------------------------//
function TextCreate(){
    //SCOREBOARD Create
    scoreText = game.add.text(5, 5, '', style)
    scoreText.fixedToCamera = true

    //DEATH TEXT Create
    statusText = game.add.text(game.camera.centerX,game.camera.centerY, '', style)
    statusText.fixedToCamera = true
    statusText.anchor.setTo(0.5, 0.5)
    statusText.visible = false

}

//-----------------------------------------------------------------//

function TextUpdate(){
    //SCOREBOARD Update
    scoreText.text = 'Score: ' + score + "\nYour Time: "
    + Math.round(game.time.totalElapsedSeconds(), 32, 32) + "s"

    //DEATH Check
    if (player1.y > 7000){
        Die()
    }

    game.physics.arcade.collide(player1, star1, Win, null, this);


}

//-----------------------------------------------------------------//

 function Win(){
    player1.kill()
    star1.kill()
    statusText.text="YOU WIN\nYour Score: "+ score 
    +"\nYour Time: "+ Math.round(game.time.totalElapsedSeconds(), 32, 32) + "s"
    +"\n Click to restart" 
    statusText.visible = true
    scoreText.visible = false
    game.input.onTap.addOnce(RestartGame,this)
 }


 function Die(){
    player1.kill()

        statusText.text="GAME OVER\nClick to restart"
        statusText.visible = true
        scoreText.visible = false

        game.input.onTap.addOnce(RestartGame,this)
 }