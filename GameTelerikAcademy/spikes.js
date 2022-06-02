//-----------------------------------------------------------------//

function CreateSpikes(){
    spikes = game.add.group()
    spikes.enableBody = true
    map.createFromObjects('Object Layer 1', 35, '', 0, true, false, spikes)
    map.createFromObjects('Object Layer 1', 36, '', 0, true, false, spikes)

    spikes.callAll('image', 'image', '')
    spikes.setAll("body.allowGravity", false)
}

//-----------------------------------------------------------------//

function HitSpike(){
    game.physics.arcade.overlap(player1, spikes, Die, null, this)
    game.physics.arcade.collide(spikes, layer2)
}