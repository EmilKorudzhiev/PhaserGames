

//-----------------------------------------------------------------//

function Map(){
    Background()
    Tilemap()
}


//-----------------------------------------------------------------//
function Background(){
    bg = game.add.tileSprite(0,0,12800,7360,'bg')
    //bg.scale.setTo(2)
}

//-----------------------------------------------------------------//

function Tilemap(){
    map1 = game.add.tilemap('mapbg')
    map1.addTilesetImage('Tiles2')

    layer1 = map1.createLayer(0)


    
    map = game.add.tilemap('map')
    map.addTilesetImage('Tiles')

    layer2 = map.createLayer(0)
    map.setCollisionByExclusion([100])
    layer3 = map.createLayer(1)
    layer2.resizeWorld()



    //layer1.debug = true
    //layer2.debug = true
    //layer3.debug = true 
}

//-----------------------------------------------------------------//

function RestartGame () {
    coins.removeAll()
    star1.removeAll()

    CoinsCreate()
    
    player1.revive()
    player1.x = 300
    player1.y = 6000
    player1.body.velocity.x = 0
    player1.body.velocity.y = 0

    score = 0

    statusText.visible = false
    scoreText.visible = true
}

//-----------------------------------------------------------------//
