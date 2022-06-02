
//-----------------------------------------------------------------//

function PlayerCreate(){
    player1 = game.add.sprite(300, 6000, 'dino')

    player1.scale.setTo(1)

    player1.animations.add('right', [2,3], 10, true)
    player1.animations.add('left', [8,9], 10, true)

    game.physics.enable(player1)

    player1.body.collideWorldBounds = true
    player1.body.bounce.y = 0

    game.camera.follow(player1)
}

//-----------------------------------------------------------------//

function Movement(){
    game.physics.arcade.collide(player1, layer2)

    if(player1.body.velocity.y >= 750){
        player1.body.velocity.y = 750
    }

    player1.body.velocity.x = 0
    if (keys.right.isDown){
       player1.animations.play('right')
       player1.body.velocity.x += speed
    } else if (keys.left.isDown){
        player1.animations.play('left')
        player1.body.velocity.x -= speed
    }else {
        player1.frame = 0
    }

    if (keys.up.isDown){
        //if (player1.body.onFloor()){
            player1.body.velocity.y = -jumpStrenght
        //}
    }
}

//-----------------------------------------------------------------//

function Restart () {
    coins.removeAll()
    CoinsCreate()

    player1.revive()
    player1.x = 300
    player1.y = 6000
    player1.body.velocity.x = 0
    player1.body.velocity.y = 0

    score = 0

    statusText.visible = false
}



