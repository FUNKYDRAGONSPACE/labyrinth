scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    scene.cameraShake(4, 500)
    music.stopAllSounds()
    music.beamUp.play()
    game.showLongText("Πληκτρολόγησε τον κωδικό \"HYPERSPACE\" για να μπεις στο υπερδιάστημα και να βγεις από τη ζώνη των αστεροειδών! ", DialogLayout.Center)
    game.over(true, effects.confetti)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`shipUp`)
    music.sonar.play()
    mySprite.startEffect(effects.fire)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`shipleft`)
    music.sonar.play()
    mySprite.startEffect(effects.fire, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`ship`)
    music.sonar.play()
    mySprite.startEffect(effects.fire, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`shipdown`)
    music.sonar.play()
    mySprite.startEffect(effects.fire, 100)
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`background`)
tiles.setTilemap(tilemap`level1`)
game.showLongText("Ωχ, όχι! Η ζώνη αστεροειδών είναι πολύ δύσκολη! Πρέπει να βρεις τη μαύρη τρύπα για να ξεφύγεις πιο γρήγορα!", DialogLayout.Full)
mySprite = sprites.create(assets.image`ship`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 5))
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
forever(function () {
    music.setVolume(20)
    music.playMelody("D - D - D - D - ", 180)
    music.playMelody("D - D - D - D C ", 180)
    music.ringTone(175)
    music.ringTone(440)
})
