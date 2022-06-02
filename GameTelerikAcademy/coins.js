
//-----------------------------------------------------------------//

function CoinsCreate(){
    //coins
    coins = game.add.group()
    coins.enableBody = true

    map.createFromObjects('Object Layer 1', 43, 'coin', 0, true, false, coins)

    coins.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true)
    coins.callAll('animations.play', 'animations', 'spin')


    //star
    star1 = game.add.group()
    star1.enableBody = true

    map.createFromObjects('Object Layer 1', 55, 'star', 0, true, false, star1)

    star1.callAll('image', 'image', 'star')
}

//-----------------------------------------------------------------//

function Coins(){
    game.physics.arcade.overlap(player1, coins, collectCoin, null, this)
    game.physics.arcade.collide(coins, layer2)

    game.physics.arcade.collide(star1, layer2)


}

//-----------------------------------------------------------------//

function collectCoin(player1, coin) {
    coin.kill()
    score++
}

