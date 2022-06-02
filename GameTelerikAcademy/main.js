'use strict'
const game = new Phaser.Game(1200, 900, Phaser.AUTO, 'game-canvas', { preload, create, update })

let speed = 600
let jumpStrenght = 775
let score = 0
let keys, map, map1, bg, player1, layer1, layer2, layer3, coin, coins, star, spikes, scoreText, statusText
let style = { font: "65px Arial", fill: "#000000"}

//-----------------------------------------------------------------//
function preload() {
    game.load.tilemap('map', '/assets/map.json', null, Phaser.Tilemap.TILED_JSON)
    game.load.tilemap('mapbg', '/assets/bg.json', null, Phaser.Tilemap.TILED_JSON)

    game.load.image('Tiles', '/assets/tiles1.png')
    game.load.image('Tiles2', '/assets/tiles2.png')

    game.load.image('star','/assets/Star.png');


    game.load.image('bg', '/assets/bg1.jpg')

    game.load.spritesheet('dino','/assets/dinozavur.png', 526/6, 94/1);
    game.load.spritesheet('coin', '/assets/coin.png', 384/6, 64/1);


    keys = game.input.keyboard.createCursorKeys()

}

//-----------------------------------------------------------------//

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE)
    game.physics.arcade.gravity.y = 1500

    Map()
    PlayerCreate()
    CreateSpikes()
    CoinsCreate()
    TextCreate() 
}

//-----------------------------------------------------------------//

function update() {
    Movement()
    Coins()
    TextUpdate()
    HitSpike()
}

